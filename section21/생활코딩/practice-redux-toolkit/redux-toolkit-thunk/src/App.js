import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import store from './store';
import { counterActions } from './store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(counterActions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
