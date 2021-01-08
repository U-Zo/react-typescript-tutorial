// action type 지정
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

// action 함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export type CounterState = {
  count: number;
};

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const initialState: CounterState = {
  count: 0,
};

const counter = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
