import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { CounterState, decrease, increase } from '../modules/counter';

const CounterContainer: React.FC = () => {
  const count = useSelector(
    ({ counter }: { counter: CounterState }) => counter.count
  );

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
