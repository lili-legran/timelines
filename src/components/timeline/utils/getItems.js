const getItems = (isPointLabel, lineCounter, currentStep) => {
  const items = [{ isPoint: true, isFirst: true }];
  if (currentStep === 1) {
    items[0].stage = 'current';
  } else {
    items[0].stage = 'completed';
  }
  if (isPointLabel) {
    for (let i = 1; i <= lineCounter; i++) {
      if (i < currentStep) {
        if (i === currentStep - 1) {
          items.push({ isPoint: false, stage: 'completed' }, { isPoint: true, stage: 'current' });
        } else {
          items.push({ isPoint: false, stage: 'completed' }, { isPoint: true, stage: 'completed' });
        }
      } else if (i === currentStep) {
        items.push({ isPoint: false, stage: 'incomplete' }, { isPoint: true, stage: 'incomplete' });
      } else {
        items.push({ isPoint: false, stage: 'incomplete' }, { isPoint: true, stage: 'incomplete', isLast: false });
      }
    }
  } else {
    for (let i = 1; i <= lineCounter; i++) {
      if (i < currentStep) {
        if (i === currentStep - 1) {
          items.push({ isPoint: false, stage: 'completed' }, { isPoint: true, stage: 'current' });
        } else {
          items.push({ isPoint: false, stage: 'completed' }, { isPoint: true, stage: 'completed' });
        }
      } else if (i === currentStep) {
        items.push({ isPoint: false, stage: 'current' }, { isPoint: true, stage: 'incomplete' });
      } else {
        items.push({ isPoint: false, stage: 'incomplete' }, { isPoint: true, stage: 'incomplete' });
      }
    }
  }
  items[items.length - 1].isLast = true;
  return items;
};

export default getItems;
