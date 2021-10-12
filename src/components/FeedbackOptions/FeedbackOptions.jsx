import PropTypes from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className="feedbackOptions">
      {options.map((option, index) => (
        <input
          className="button"
          type="button"
          name={option}
          value={option}
          onClick={onLeaveFeedback}
          key={index}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
