/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Timeline from '../timeline/timeline';
import Counter from '../counter/counter';
import './timelines.scss';

class Timelines extends React.Component {
  state = {
    isPointLabel: true,
    steps: 4,
    currentStep: 3,
    isControlMode: false,
    topLabel: true
  }

  changeMode = () => {
    const { isControlMode } = this.state;
    this.setState({
      isControlMode: !isControlMode
    });
  }

  changeTimelineType = () => {
    const { isPointLabel } = this.state;
    this.setState({
      isPointLabel: !isPointLabel
    });
  }

  changeLabelView = () => {
    const { topLabel } = this.state;
    this.setState({
      topLabel: !topLabel
    });
  }

  stepsReduce = () => {
    const { steps, currentStep } = this.state;
    if (steps > 1) {
      this.setState({
        steps: steps - 1
      });
      if (steps - 1 < currentStep) {
        this.currentStepReduce();
      }
    }
  }

  stepsIncrease = () => {
    const { steps } = this.state;
    if (steps < 10) {
      this.setState({
        steps: steps + 1
      });
    }
  }

  currentStepReduce = () => {
    const { currentStep } = this.state;
    if (currentStep > 1) {
      this.setState({
        currentStep: currentStep - 1
      });
    }
  }

  currentStepIncrease = () => {
    const { currentStep, steps } = this.state;
    if (currentStep < 10 && currentStep < steps) {
      this.setState({
        currentStep: currentStep + 1
      });
    }
  }

  render() {
    const {
      isPointLabel,
      steps,
      currentStep,
      isControlMode,
      topLabel
    } = this.state;
    return (
      <div className='timelines'>
        <button type='button' className='timelines__button timelines__control-btn' onClick={this.changeMode}>
          {isControlMode ? 'Выйти из режима управления' : 'Перейти в режим управления' }
        </button>
        {isControlMode
          ? (
            <>
              <div className='timelines__option'>
                <button type='button' className='timelines__button timelines__label-position' onClick={this.changeLabelView}>
                  Изменить расположение текста
                </button>
                <button type='button' className='timelines__button timelines__change-type-btn' onClick={this.changeTimelineType}>
                  Изменить вид таймлайна
                </button>
                <Counter
                  reduce={this.stepsReduce}
                  increase={this.stepsIncrease}
                  value={steps}
                  title='Кол-во шагов'
                />
                <Counter
                  reduce={this.currentStepReduce}
                  increase={this.currentStepIncrease}
                  value={currentStep}
                  title='Текущий шаг'
                />
              </div>
              <Timeline
                isPointLabel={isPointLabel}
                steps={steps}
                currentStep={currentStep}
                topLabel={topLabel}
              />
            </>
          ) : (
            <>
              <Timeline isPointLabel steps={steps} currentStep={currentStep} topLabel />
              <Timeline isPointLabel={false} steps={steps} currentStep={currentStep} topLabel />
              <Timeline isPointLabel steps={steps} currentStep={currentStep} topLabel={false} />
              <Timeline
                isPointLabel={false}
                steps={steps}
                currentStep={currentStep}
                topLabel={false}
              />
            </>
          )}
      </div>
    );
  }
}

export default Timelines;
