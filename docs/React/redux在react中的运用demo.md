# redux在react中的运用demo

------



使用ts写法来实现的例子

先安装相关npm插件



```powershell
npm install redux react-redux
或
yarn add redux react-redux
```



### 1. 创建 Redux Store

#### `src/store/reducer.ts`

```typescript
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
```

#### `src/store/counterReducer.ts`

```typescript
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
```

#### `src/store/store.ts`

```typescript
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;
```

### 2. 创建 Redux Action

#### `src/store/actions.ts`

```typescript
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const reset = () => ({
  type: 'RESET',
});
```

### 3. 创建 React 组件

#### `src/components/Counter.tsx`

```tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../store/actions';
import { RootState } from '../store/reducer';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
```

### 4. 将 Redux Store 集成到应用中

#### `src/App.tsx`

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
```



### 解释

- 首先，我们定义了 `CounterState` 接口来描述计数器的状态，然后在 `counterReducer` 中使用这个接口来定义初始状态和 reducer 函数。
- 在 `rootReducer` 中，我们使用 `combineReducers` 来组合多个 reducer，并使用 `RootState` 类型来描述整个应用的状态。
- 在 React 组件中，我们使用了 `useSelector` 钩子从 Redux store 中获取 `count` 状态，并使用 `useDispatch` 钩子来派发 action。这里需要注意的是，我们使用了 `RootState` 类型来指定 `useSelector` 钩子的参数类型。
- 最后，在应用的根组件 `App` 中，我们使用 `Provider` 组件包裹整个应用，并将 Redux store 传递给它，以便在整个应用中访问到 Redux 的状态和 action。

这样，我们就创建了一个简单的 TypeScript 的 Redux 计数器应用。