import React from 'react';
import PropTypes from 'prop-types';
import './counter.scss';

function Counter(props) {
  const {
    reduce,
    increase,
    value,
    title
  } = props;
  return (
    <div className='timelines__step-counter'>
      <div className='timelines__step-counter_title'>{title}</div>
      <span className='timelines__step-counter_toggle' onClick={reduce}>-</span>
      <span className='timelines__step-counter_value'>{value}</span>
      <span className='timelines__step-counter_toggle' onClick={increase}>+</span>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number,
  reduce: PropTypes.func,
  increase: PropTypes.func,
  title: PropTypes.string,
};


export default Counter;
