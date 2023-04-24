import { Component } from 'react';
import { SectionWrap } from './section/Section';
import { FeedbackOptions } from './feedback/FeedbackOption';
import { Notification } from './notification/Notification';
import { Statistics } from './statistic/statistic';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = nameFeedback => {
    this.setState(prevData => {
      let obj = { ...prevData };
      obj[nameFeedback] = prevData[nameFeedback] + 1;
      return obj;
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100 || 0
    );
  };

  render() {
    return (
      <div className={css.container}>
        <SectionWrap title="Please, leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeavefeedback={this.updateState}
          />
        </SectionWrap>

        <SectionWrap title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There's no feedback yet..." />
          ) : (
            <Statistics
              options={Object.keys(this.state)}
              statistic={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </SectionWrap>
      </div>
    );
  }
}
