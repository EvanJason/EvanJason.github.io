/**
 * 把本地搜索的下拉改造成 DocSearch 式的居中弹窗：
 * 聚焦搜索框先弹窗（最近搜索 + 键位条），输入关键词后才展示结果。
 *
 * 这里只切换 body 上的状态类，并在搜索容器内追加一个「最近搜索」面板，
 * 不移动任何 DOM、也不改动搜索插件的组件。React 合成事件、
 * autocomplete.js 的 dropdown 父子样式都保持原样。
 * 视觉部分全部放在 src/css/custom.css 的「DocSearch 式搜索弹窗」段落。
 */
const OPEN_CLASS = 'search-modal-open';
const QUERY_CLASS = 'search-has-query';
const RECENT_CLASS = 'search-has-recent';
const PANEL_CLASS = 'search-recent-panel';

const STORAGE_KEY = 'docusaurus-search-local:recent-queries';
const MAX_RECENT = 6;
const GHOST_CLASS = 'search-navbar-ghost';

function isSearchInput(node) {
  return (
    node instanceof Element &&
    node.matches('.navbar__search-input') &&
    !node.closest('.search-navbar-ghost')
  );
}

function getSearchInput() {
  return document.querySelector(
    '.navbar__search:not(.search-navbar-ghost) .navbar__search-input',
  );
}

/* ===== navbar 搜索框占位：弹窗打开时复用原生样式，保证两种状态外观一致 ===== */

let ghostTemplate = null;

/**
 * 在弹窗打开前抓取原生搜索框的完整 HTML。
 * 必须整个节点克隆：插件的 CSS module 规则依赖祖先的 searchBarContainer_* /
 * focused_* 等类，只复制 input 的类名拿不到圆角、灰底和放大镜。
 */
function captureTemplate() {
  if (ghostTemplate) return ghostTemplate;
  const search = document.querySelector(
    '.navbar__search:not(.search-navbar-ghost)',
  );
  if (!search) return null;
  ghostTemplate = { html: search.outerHTML };
  return ghostTemplate;
}

function ensureGhost() {
  const box = document.querySelector('[class*="searchBox"]');
  if (!box || box.querySelector('.' + GHOST_CLASS)) return;
  const tpl = captureTemplate();
  if (!tpl) return;

  const tmp = document.createElement('div');
  tmp.innerHTML = tpl.html;
  const ghost = tmp.firstElementChild;
  if (!ghost) return;

  // 保留全部原生类名，只去掉 focused_* 并加上占位标记
  ghost.className =
    ghost.className
      .split(/\s+/)
      .filter((name) => name && !/^focused_/.test(name))
      .join(' ') + ' ' + GHOST_CLASS;
  ghost.setAttribute('aria-hidden', 'true');

  // 移除 autocomplete 动态产物与加载动画，占位框只留静态外观
  ghost
    .querySelectorAll('pre, [class*="dropdownMenu"], [class*="loadingRing"]')
    .forEach((node) => node.remove());

  const fakeInput = ghost.querySelector('input');
  if (fakeInput) {
    fakeInput.value = '';
    fakeInput.readOnly = true;
    fakeInput.tabIndex = -1;
    fakeInput.placeholder = '搜索';
    [
      'style', 'autocomplete', 'spellcheck', 'role', 'dir',
      'aria-autocomplete', 'aria-expanded', 'aria-owns', 'aria-activedescendant',
    ].forEach((attr) => fakeInput.removeAttribute(attr));
  }
  box.appendChild(ghost);
}

/* ===== 最近搜索：localStorage 读写 ===== */

function readRecent() {
  try {
    const list = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(list)
      ? list
          .filter((item) => typeof item === 'string' && item.trim())
          .slice(0, MAX_RECENT)
      : [];
  } catch (e) {
    // 隐私模式 / localStorage 被禁用时静默降级
    return [];
  }
}

function writeRecent(list) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    // 同上
  }
}

function pushRecent(query) {
  const q = (query || '').trim();
  if (!q) return;
  const list = readRecent().filter(
    (item) => item.toLowerCase() !== q.toLowerCase(),
  );
  list.unshift(q);
  writeRecent(list.slice(0, MAX_RECENT));
}

function removeRecent(query) {
  writeRecent(
    readRecent().filter((item) => item.toLowerCase() !== query.toLowerCase()),
  );
}

/* ===== 最近搜索面板：挂在 .navbar__search 内，绝对定位，不参与 flex ===== */

function getPanel() {
  const search = document.querySelector(
    '.navbar__search:not(.search-navbar-ghost)',
  );
  if (!search) return null;
  let panel = search.querySelector('.' + PANEL_CLASS);
  if (!panel) {
    panel = document.createElement('div');
    panel.className = PANEL_CLASS;
    // React 重渲染 navbar 时可能丢掉外部追加的节点，下次打开会自愈重建
    search.appendChild(panel);
  }
  return panel;
}

function makeButton(className, action, query) {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = className;
  el.dataset.recentAction = action;
  if (query !== undefined) el.dataset.recentQuery = query;
  return el;
}

function renderRecent() {
  // React 重渲染 navbar 时可能冲掉外部追加的占位节点，顺手自愈
  ensureGhost();
  const list = readRecent();
  document.body.classList.toggle(RECENT_CLASS, list.length > 0);

  const panel = getPanel();
  if (!panel) return;
  panel.replaceChildren();

  const header = document.createElement('div');
  header.className = 'search-recent-header';
  const title = document.createElement('span');
  title.className = 'search-recent-title';
  title.textContent = '最近搜索';
  const clear = makeButton('search-recent-clear', 'clear');
  clear.textContent = '清空';
  header.append(title, clear);
  panel.appendChild(header);

  const listEl = document.createElement('div');
  listEl.className = 'search-recent-list';
  list.forEach((query) => {
    const item = makeButton('search-recent-item', 'apply', query);

    const icon = document.createElement('span');
    icon.className = 'search-recent-icon';
    icon.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.className = 'search-recent-label';
    label.textContent = query;

    const remove = document.createElement('span');
    remove.className = 'search-recent-remove';
    remove.dataset.recentAction = 'remove';
    remove.dataset.recentQuery = query;
    remove.setAttribute('role', 'button');
    remove.setAttribute('aria-label', '删除 ' + query);
    remove.textContent = '×';

    item.append(icon, label, remove);
    listEl.appendChild(item);
  });
  panel.appendChild(listEl);
}

/**
 * 回填查询：输入框是 React 受控组件，直接赋值会被 value tracker 吞掉，
 * 必须用原型上的原生 setter 改值，再派发原生 input 事件，
 * 这样 React 的 onChange 和 autocomplete.js 的 input.aa 会同时触发。
 */
function applyRecent(query) {
  const input = getSearchInput();
  if (!input) return;
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value',
  ).set;
  setter.call(input, query);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  document.body.classList.add(QUERY_CLASS);
  renderRecent();
  input.focus();
  try {
    input.setSelectionRange(query.length, query.length);
  } catch (e) {
    // 部分浏览器对非文本类型不支持，忽略
  }
}

function open(input) {
  // 必须在加 OPEN_CLASS 之前抓取：一旦加上，真实 input 会被 CSS 变成
  // 卡片里的 720px 大输入框，宽度和类名都不再是 navbar 上的原生状态
  ensureGhost();
  document.body.classList.add(OPEN_CLASS);
  document.body.classList.toggle(
    QUERY_CLASS,
    input.value.trim().length > 0,
  );
  renderRecent();
}

function close() {
  if (typeof document === 'undefined') return;
  document.body.classList.remove(OPEN_CLASS, QUERY_CLASS);
  const input = getSearchInput();
  if (!input) return;
  // 关闭时清空输入，保证下次点开先看到空状态 / 最近搜索，而不是残留结果
  if (input.value) {
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;
    setter.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
  if (document.activeElement === input) {
    input.blur();
  }
}

/** Docusaurus client module 生命周期：路由跳转后收起弹窗 + 记录搜索词 */
export function onRouteUpdate() {
  try {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) pushRecent(q);
  } catch (e) {
    // 忽略无 window / URLSearchParams 的环境
  }
  close();
}

if (typeof document !== 'undefined') {
  // 事件委托，不依赖 navbar 的挂载时机
  document.addEventListener('focusin', (event) => {
    if (!isSearchInput(event.target)) return;
    open(event.target);
  });

  // 捕获阶段监听，React 的受控 onChange 不会影响这里
  document.addEventListener(
    'input',
    (event) => {
      if (!isSearchInput(event.target)) return;
      document.body.classList.toggle(
        QUERY_CLASS,
        event.target.value.trim().length > 0,
      );
    },
    true,
  );

  // 关闭只由「点遮罩 / ESC / 路由跳转」触发。
  // 不用 focusout 延迟判断：点击输入框区域时浏览器会短暂失焦，
  // 那个定时器会把刚刚重新打开的弹窗又关掉。

  // 捕获阶段：autocomplete.js 在 input 上处理 Enter 并可能阻断冒泡，
  // 这里必须先拿到按键，否则回车搜索不会被记入最近搜索
  document.addEventListener(
    'keydown',
    (event) => {
      if (!document.body.classList.contains(OPEN_CLASS)) return;
      if (event.key === 'Escape') {
        close();
        return;
      }
      // 回车 = 确认搜索，记入最近搜索
      if (event.key === 'Enter' && isSearchInput(event.target)) {
        pushRecent(event.target.value);
        renderRecent();
      }
    },
    true,
  );

  // searchBox_* 是 .navbar__search 的父级；弹窗打开后 .navbar__search 会被
  // CSS 固定到屏幕中央，两者在视觉上完全分离。
  const SEARCH_AREA = '.navbar__search, [class*="searchBox"], .search-recent-panel';

  function isInsideCard(x, y) {
    const card = document.querySelector(
      '.navbar__search:not(.search-navbar-ghost)',
    );
    if (!card) return false;
    const r = card.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }

  function handleRecentAction(action, query) {
    if (action === 'clear') {
      writeRecent([]);
      renderRecent();
      const input = getSearchInput();
      if (input) input.focus();
    } else if (action === 'remove') {
      removeRecent(query);
      renderRecent();
      const input = getSearchInput();
      if (input) input.focus();
    } else if (action === 'apply') {
      applyRecent(query);
    }
  }

  // 面板按钮已在 pointerdown 处理时置位，避免随后的 click 再执行一次
  let actionHandledOnPointerDown = false;

  /**
   * 开关只由 pointerdown 决定，绝不能挂在 click 上：
   * 弹窗一打开，.navbar__search 从 navbar 移到屏幕中央，mousedown 与 mouseup
   * 落在不同元素上；加上 React 会替换 input 节点，click 要么派发给公共祖先
   * （navbar/body），要么发给已 detached 的节点而根本到不了 document。
   * 用 click 的 target 判断「是否点外部」会误关弹窗，表现就是「按住才显示、
   * 松开就没了」；靠 click 打开则会出现「点一下没反应」。
   */
  document.addEventListener(
    'pointerdown',
    (event) => {
      actionHandledOnPointerDown = false;
      const el = event.target instanceof Element ? event.target : null;

      // 最近搜索面板的按钮同样在 pointerdown 处理：点击会触发 React 重渲染，
      // 面板节点被替换后 click 会落进 detached 节点，冒泡到不了 document
      const actionEl = el && el.closest('[data-recent-action]');
      if (actionEl) {
        actionHandledOnPointerDown = true;
        handleRecentAction(
          actionEl.dataset.recentAction,
          actionEl.dataset.recentQuery || '',
        );
        return;
      }

      const inSearchArea = !!(el && el.closest(SEARCH_AREA));
      const isOpen = document.body.classList.contains(OPEN_CLASS);

      if (isOpen) {
        // 落在卡片内、或落在 navbar 的搜索入口占位上，一律保持打开
        if (inSearchArea || isInsideCard(event.clientX, event.clientY)) return;
        close();
        return;
      }

      if (!inSearchArea) return;
      const input = getSearchInput();
      if (!input) return;
      // autocomplete.js 会阻止 mousedown 的默认聚焦，必须显式 focus
      if (document.activeElement !== input) input.focus();
      if (!document.body.classList.contains(OPEN_CLASS)) open(input);
    },
    true,
  );

  // React 在 mousedown 之后会重渲染并丢掉焦点，mouseup 时补回来，
  // 保证点开弹窗后能直接打字（mouseup 一定会派发，click 则未必）
  document.addEventListener(
    'mouseup',
    () => {
      if (!document.body.classList.contains(OPEN_CLASS)) return;
      // 面板按钮 / React 重渲染都会抢走焦点，autocomplete 一失焦就收起下拉，
      // 所以只要弹窗还开着，mouseup 时统一把焦点还给输入框
      const input = getSearchInput();
      if (input && document.activeElement !== input) input.focus();
    },
    true,
  );

  document.addEventListener('click', (event) => {
    // pointerdown 已处理过这次面板点击，跳过动作（click 可能根本不会派发）
    if (actionHandledOnPointerDown) {
      actionHandledOnPointerDown = false;
      const input = getSearchInput();
      if (input && document.activeElement !== input) input.focus();
      return;
    }

    // 兜底：面板按钮的 click 若正常派发，仍走同一套动作处理
    const actionEl =
      event.target instanceof Element &&
      event.target.closest('[data-recent-action]');
    if (actionEl) {
      handleRecentAction(
        actionEl.dataset.recentAction,
        actionEl.dataset.recentQuery || '',
      );
      return;
    }

    if (!document.body.classList.contains(OPEN_CLASS)) return;
    // 点击命中结果 = 一次有效搜索
    if (
      event.target instanceof Element &&
      event.target.closest('[class*="suggestion"]')
    ) {
      const input = getSearchInput();
      if (input) {
        pushRecent(input.value);
        renderRecent();
      }
    }
  });
}
