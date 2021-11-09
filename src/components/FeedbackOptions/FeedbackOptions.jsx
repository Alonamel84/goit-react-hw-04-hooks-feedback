import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeadbackOptions = ({ onLeaveFeedback, options}) => {
 
    
  return (
    options.map((({name, title} )=>
        
            <button className={s.button} key={ name} onClick={onLeaveFeedback} type='button' name={name} >
                    {title}
          </button>    
                 
        )
        ))
}
FeadbackOptions.propTypes = {
  name: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
  type: PropTypes.string,
 
}
export default FeadbackOptions;
