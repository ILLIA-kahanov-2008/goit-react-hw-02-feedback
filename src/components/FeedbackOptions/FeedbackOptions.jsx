import PropTypes from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map((option, index) => (
    <input
      type="button"
      name={option}
      value={option}
      onClick={onLeaveFeedback}
      key={index}
    />
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
