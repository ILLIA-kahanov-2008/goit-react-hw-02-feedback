import PropTypes from 'prop-types';

import { Notification } from "../Notification/Notification";

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if ( total  !== 0) {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>)
  }
   return (<Notification message="No feedback given" />)  
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};