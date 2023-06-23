import { useState } from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <>
      <h1 aria-label="heading-title">Counter App</h1>
      <h2 aria-label="heading-counter">{counter}</h2>

      <button aria-label="btn-sum" onClick={handleAdd}>
        +1
      </button>
      <button aria-label="btn-sub" onClick={handleSubtract}>
        -1
      </button>
      <button aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number
};

CounterApp.defaultProps = {
  value: 0
};
