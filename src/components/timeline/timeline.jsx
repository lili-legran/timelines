/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Point from '../point/point';
import Line from '../line/line';
import getItems from './utils/getItems';
import './timeline.scss';

function Timeline(props) {
  const {
    steps,
    isPointLabel,
    currentStep,
    topLabel
  } = props;
  const lineCounter = isPointLabel ? steps - 1 : steps;
  // добавила -1px для корректного отображения в Edge
  const lineWidth = `calc((100% - 1px - ${10 * (lineCounter + 1)}px - ${6 * lineCounter}px) / ${lineCounter})`;
  const items = getItems(isPointLabel, lineCounter, currentStep);

  return (
    <div className='timeline'>
      {
        items.map((item, index) => {
          if (item.isPoint) {
            return (
              <Point
                key={index}
                stage={item.stage}
                pointIndex={index / 2 + 1}
                isPointLabel={isPointLabel}
                topLabel={topLabel}
                isFirst={item.isFirst}
                isLast={item.isLast}
              />
            );
          }
          return (
            <Line
              key={index}
              width={lineWidth}
              stage={item.stage}
              pointIndex={(index + 1) / 2}
              isPointLabel={isPointLabel}
              topLabel={topLabel}
            />
          );
        })
      }
    </div>
  );
}

Timeline.propTypes = {
  steps: PropTypes.number,
  currentStep: PropTypes.number,
  isPointLabel: PropTypes.bool,
  topLabel: PropTypes.bool,
};

export default Timeline;
