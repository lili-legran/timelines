import React from 'react';
import PropTypes from 'prop-types';
import './line.scss';

function Line(props) {
  const {
    width,
    stage,
    pointIndex,
    isPointLabel,
    topLabel
  } = props;
  return (
    <div className={`timeline__line timeline__line_${stage}`} style={{ width }}>
      { (!isPointLabel)
        && (
          (topLabel) ? (
            <div className='timeline__line_label timeline__line_label-top'>
              {`Step ${pointIndex}`}
            </div>
          ) : (
            <div className='timeline__line_label timeline__line_label-bottom'>
              {`Step ${pointIndex}`}
            </div>
          )
        )}
    </div>
  );
}

Line.propTypes = {
  width: PropTypes.string,
  stage: PropTypes.string,
  pointIndex: PropTypes.number,
  isPointLabel: PropTypes.bool,
  topLabel: PropTypes.bool,
};

export default Line;
