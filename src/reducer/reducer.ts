type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: 'Pending',
};

type UpdateCounterAction = {
  type: 'increase' | 'decrease' | 'reset';
};

type SetStatusAction = {
  type: 'setStatus';
  payload: 'active' | 'inactive';
};

export type CounterAction = UpdateCounterAction | SetStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + 1 };

    case 'decrease':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { count: 0, status: 'Pending' };
    case 'setStatus':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
