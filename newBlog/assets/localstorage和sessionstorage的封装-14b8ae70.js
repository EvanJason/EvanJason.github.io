const t={title:"localstorage和sessionstorage的封装",categories:["Angular"],tags:["localstorage","sessionstorage"],date:"2021-10-15",author:"深海如梦",excerpt:"localstorage和sessionstorage的封装"},e=`<h1>localstorage 和 sessionstorage 的封装</h1>
<h2>代码</h2>
<pre><code class="language-typescript">const useStorage = ($storage) =&gt; {
	/**
	 * 根据 key 值获取储存在 storage 中的值
	 * @param key storage key
	 */
	const get = (key: string) =&gt; {
		let value = $storage.getItem(key);
		try {
			value = JSON.parse(value);
			return value;
		} catch {
			return value;
		}
	};

	/**
	 * 根据 key 值向 storage 中储存值
	 * @param key storage key
	 * @param value 需要储存在 storage 中的值
	 */
	const set = (key: string, value: any) =&gt; {
		return $storage.setItem(key, value ? JSON.stringify(value) : value);
	};

	/**
	 * 根据 key 值移除储存在 storage 中的值
	 * @param key storage key
	 */
	const remove = (key: string) =&gt; {
		return $storage.removeItem(key);
	};

	/**
	 * 移除除了 key 之外的所有储存在 storage 中的值
	 * @param key storage key
	 */
	const clearExcept = (key: string) =&gt; {
		for (let i = 0; i &lt; $storage.length; i++) {
			const itemKey: string | undefined = $storage.key(i);
			if (itemKey &amp;&amp; itemKey !== key) {
				$storage.removeItem(itemKey);
			}
		}
	};

	/**
	 * 移除所有储存在 storage 中的值
	 */
	const clearAll = () =&gt; {
		for (const itemKey in $storage) {
			if (itemKey) {
				$storage.removeItem(itemKey);
			}
		}
	};

	return {
		get,
		set,
		remove,
		clearExcept,
		clearAll,
	};
};

const SessionStorageService = useStorage(window.sessionStorage || sessionStorage);
const LocalStorageService = useStorage(window.localStorage || localStorage);

export { SessionStorageService, LocalStorageService };
</code></pre>
<h2>使用</h2>
<pre><code>LocalStorageService.get('numList')
let data = [1,2,3,4,5,6,7,8,9,]
LocalStorageService.set('numList',data)
</code></pre>
`;export{t as attributes,e as html};
