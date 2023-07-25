/* -------------------------pc ------------------------*/

$(function () {
  // 热门搜索
  $(".search-section input.seek_text").focus(function () {
    $(".search-section .search-box").show();
  });

  $(".search-section input.seek_text").blur(function () {
    $(".search-section .search-box").hide();
  });

  $(".login_form form .label_box").each(function (index, i) {
    $(i).click(function () {
      docie();
      $(".login_form form .label_box ").each(function (index, i) {
        inp();
      });
      $(i).addClass("on");
      $(i)
        .find("input")
        .slideDown(350);
    });
  });

  //回到顶部
  function goTop(min_height) {
    $(".go_up").click(function () {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        700
      );
    });
    min_height = min_height ? min_height : 400;
    $(window).scroll(function () {
      var s = $(window).scrollTop();
      if (s > $(document).height() / 5) {
        $(".go_up").addClass("show");
      } else {
        $(".go_up").removeClass("show");
      }
    });
  }
  goTop();

});

function inp() {
  $(".login_form form .label_box ").each(function (index, i) {
    var isFocus = $(i)
      .find("input")
      .is(":focus");
    var fival = $(i)
      .find("input")
      .val();
    if (true != isFocus && fival == "") {
      $(i)
        .find("input")
        .slideUp(350);
      $(i).removeClass("on");
    }
  });
}

// 点击空白ie
function docie() {
  if (event.stopPropagation) {
    event.stopPropagation(); // 针对 Mozilla 和 Opera
  } else if (window.event) {
    window.event.cancelBubble = true; // 针对 IE
  }
}

/* -------------------------自适应 ------------------------*/
$(function () {
  var LINswitch = true;
  var pcimg = $(".banner_swiper img").attr("src");
  var ydimg = $(".banner_swiper img").attr("data-m-img");
  // 首次加载判断是否小屏幕执行
  if ($(window).width() < 720) {
    Mobile_execution();
  }
  //移动端下 点击三横 侧边导航
  $(".logo_seek .san_san").click(function () {
    $("#To_login_1").hide(0);
    docie();
    $(".dropdown_menu").slideUp(0);
    $(".header .navbar ._mask").show();
    $("#navbar").animate({
      left: "0"
    });
  });

  $(".searcha-span").click(function () {
    if ($(window).width() < 720) {
      $(".Mobil_search_box").show();
    }
  });
  $(window).resize(function () {
    if ($(window).width() < 720 && LINswitch === true) {
      Mobile_execution();
    }
    if ($(window).width() > 720 && LINswitch === false) {
      LINswitch = true;
      $(".tab_seek_box").html("");
      $(".banner_swiper img").attr("src", pcimg); // 顶部大图切换pc
    }
  });
  // 移动端执行
  function Mobile_execution() {
    LINswitch = false;
    tab_seek_box();
    $(".banner_swiper img").attr("src", ydimg); // 顶部大图切换m
  }
});

// 移动端 搜索导航
function tab_seek_box() {
  $(".tab_seek_box").html(
    "<!-- 导航 -->" +
    '    <div class="tab-menu">' +
    '        <a href="" class="tab-item ">IOS</a>' +
    '        <a href="" class="tab-item "> Android</a>' +
    '        <a href="" class="tab-item ">PC</a>' +
    "    </div>" +
    "    <!-- 搜索 -->" +
    '    <div class="div_seek">' +
    '        <form action="">' +
    '            <div class="input_seek">' +
    '                <input type="text" name="text" placeholder="search..."  value="">' +
    "            </div>" +
    "        </form>" +
    "     </div>"
  );
}

function monitor(a) {
  // 监听 宽度
  if ($(window).width() < 720) {
    // 侧导航
    $(a).hide();
    $("#navbar").animate({
      left: "-110%"
    });
  }
}

// 响应式设置font-sizi
(function (designWidth, maxWidth) {
  var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    maxWidth = maxWidth || 540;
    width > maxWidth && (width = maxWidth);
    var rem = (width * 100) / designWidth;
    remStyle.innerHTML = "html{font-size:" + rem + "px;}";
    // $("html").css('fontSize',''+ rem + 'px');
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    var wrap = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();

  win.addEventListener(
    "resize",
    function () {
      clearTimeout(tid); //防止执行两次
      tid = setTimeout(refreshRem, 300);
    },
    false
  );

  win.addEventListener(
    "pageshow",
    function (e) {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener(
      "DOMContentLoaded",
      function (e) {
        doc.body.style.fontSize = "16px";
      },
      false
    );
  }
})(720, 720);
