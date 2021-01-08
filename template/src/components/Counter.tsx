import React, { ReactElement } from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const Counter = ({
  count,
  onIncrease,
  onDecrease,
}: CounterProps): ReactElement => {
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <button type="button" onClick={onDecrease}>
        -
      </button>
    </div>
  );
};

export default Counter;
