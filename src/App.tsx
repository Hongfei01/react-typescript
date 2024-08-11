import { useReducer } from 'react';
import {
  EventComponent,
  Header,
  ComponentChallenger as Component,
} from './components';
import ParentComponent from './context/ParentComponent';

import { ThemContextProvider } from './context/ThemContext';

import { initialState, counterReducer } from './reducer/reducer';

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <ThemContextProvider>
        <Header name='zs' id={1} />
        <Header name='ls' id={2}>
          hello,world
        </Header>
        <EventComponent />
        <Component type='basic' name='susan' />
        <Component type='advanced' name='anna' email='anna@anna.com' />
      </ThemContextProvider>
      <ParentComponent />

      <div>
        <h2>Count: {state.count}</h2>
        <h2>Status: {state.status}</h2>

        <div className='btn-container'>
          <button
            onClick={() => dispatch({ type: 'increase' })}
            className='btn'
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'decrease' })}
            className='btn'
          >
            Decrement
          </button>
          <button onClick={() => dispatch({ type: 'reset' })} className='btn'>
            Reset
          </button>
        </div>
        <div className='btn-container'>
          <button
            onClick={() => dispatch({ type: 'setStatus', payload: 'active' })}
            className='btn'
          >
            Set Status to Active
          </button>
          <button
            className='btn'
            onClick={() => dispatch({ type: 'setStatus', payload: 'inactive' })}
          >
            Set Status to Inactive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
