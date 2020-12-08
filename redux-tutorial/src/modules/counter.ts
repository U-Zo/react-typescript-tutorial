const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counter = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
