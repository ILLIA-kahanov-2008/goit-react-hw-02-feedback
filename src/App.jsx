import { Component } from "react";

import { Section } from "./components/Section/Section";
import {FeedbackOptions} from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";
// import { Notification } from "./components/Notification/Notification";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {    
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  }

  render() {  
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">          
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />          
        </Section>
      </div>
    );
  }
}

export default App;
