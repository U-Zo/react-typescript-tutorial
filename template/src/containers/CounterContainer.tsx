import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { CounterState, decrease, increase } from '../modules/counter';

const CounterContainer = (): ReactElement => {
  const { count } = useSelector(({ counter }: { counter: CounterState }) => ({
    count: counter.count,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  return (
    <Counter onIncrease={onIncrease} onDecrease={onDecrease} count={count} />
  );
};

export default CounterContainer;
