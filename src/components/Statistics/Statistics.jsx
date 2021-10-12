import PropTypes from "prop-types";
import { Notification } from "../Notification/Notification";

import s from "./Statistics.module.css";
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if (total !== 0) {
    return (
      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span>Good:</span> <span>{good}</span>
        </li>
        <li className={s.statsItem}>
          <span>Neutral:</span> <span>{neutral}</span>
        </li>
        <li className={s.statsItem}>
          <span>Bad:</span> <span>{bad}</span>
        </li>
        <li className={s.statsItem}>
          <span>Total:</span> <span>{total}</span>
        </li>
        <li className={s.statsItem}>
          <span>Positive Feedback:</span> <span>{positivePercentage}%</span>
        </li>
      </ul>
    );
  }
  return <Notification message="No feedback given" />;
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
