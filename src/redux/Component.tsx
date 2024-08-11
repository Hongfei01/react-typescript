import { useAppDispatch, useAppSelector } from '../hooks';
import { increase, decrease, reset, setStatus } from './countSlice';

function Component() {
  const { count, status } = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Status: {status}</h2>

      <div className='btn-container'>
        <button onClick={() => dispatch(increase())} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch(decrease())} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button onClick={() => dispatch(setStatus('active'))} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={() => dispatch(setStatus('inactive'))}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
