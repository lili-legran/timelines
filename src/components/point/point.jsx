import React from 'react';
import PropTypes from 'prop-types';
import './point.scss';

function Point(props) {
  const {
    stage,
    pointIndex,
    isPointLabel,
    topLabel,
    isLast,
    isFirst
  } = props;
  const isFirstClassName = `${isFirst ? 'timeline__point_label-first' : ''}`;
  const isLastClassName = `${isLast ? 'timeline__point_label-last' : ''}`;
  const verticalClassName = `${topLabel ? 'timeline__point_label-top' : 'timeline__point_label-bottom'}`;
  return (
    <div className={`timeline__point timeline__point_${stage}`}>
      { isPointLabel
        && (
          <div className={`timeline__point_label ${verticalClassName} ${isFirstClassName} ${isLastClassName}`}>
            {`Step ${pointIndex}`}
          </div>
        )}
    </div>
  );
}

Point.propTypes = {
  stage: PropTypes.string,
  pointIndex: PropTypes.number,
  isPointLabel: PropTypes.bool,
  topLabel: PropTypes.bool,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
};

export default Point;
