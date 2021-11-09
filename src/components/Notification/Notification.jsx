import s from './Notification.module.css';
import PropTypes from 'prop-types';
const Notification = () => {
    return (
        <p className={s.message}>No feedback given</p>
    )
};
Notification.propTypes = {
    good: PropTypes.string,
}
export default Notification;