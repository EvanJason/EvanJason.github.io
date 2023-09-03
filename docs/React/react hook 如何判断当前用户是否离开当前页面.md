---

title: react hook 如何判断当前用户是否离开当前页面

categories:
  - 是否离开当前页面
  - react
  - react hook
tags:
  - 是否离开当前页面
  - react
  - react hook

date: "2023-08-14"

authors: lin

excerpt: react hook 如何判断当前用户是否离开当前页面

---

# react hook 如何判断当前用户是否离开当前页面



要在React中判断用户是否离开当前页面，你可以使用`useEffect`钩子和`beforeunload`事件来实现。

首先，你需要在组件中定义一个状态，用于表示用户是否离开当前页面：

```jsx
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [isPageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return event.returnValue = '确定要离开吗？';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {isPageVisible ? '当前页面可见' : '当前页面不可见'}
    </div>
  );
};

export default MyComponent;
```

上面的代码中，我们使用了两个`useEffect`钩子。第一个钩子用于监听页面的可见性变化，当页面由可见变为不可见或由不可见变为可见时，更新`isPageVisible`状态。

第二个钩子用于监听页面关闭或刷新事件。当用户试图离开当前页面时，会触发`beforeunload`事件。我们在这个钩子中添加了一个事件监听器，当事件触发时，阻止默认行为，并返回一个字符串，以激活浏览器的关闭确认提示。

最后，在组件的返回值中，根据`isPageVisible`的值显示相应的内容。

这样，你就可以在React中判断用户是否离开当前页面了。请注意，浏览器可能对`beforeunload`事件的使用进行限制，以提供更好的用户体验和安全性保护。这意味着上述代码在某些情况下可能不会触发`beforeunload`事件。