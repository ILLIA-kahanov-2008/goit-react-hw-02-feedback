import PropTypes from 'prop-types';

export function Notification({ message }) {
  return (
    <p className="s.notifyMessage" style={{color:"red", fontSize: 24}}> { message }</p>  
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
}