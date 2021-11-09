import './App.css';
import { useState } from 'react';
import Notification from './components/Notification/Notification.jsx';
import Section from './components/SectionTitle';
import FeadbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import btnOptions from './data';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = e => {
    const { name, value } = e.target;
    {
      switch (name) {
        case 'good':
          setGood(prevGood => prevGood + 1);
          return;
        case 'bad':
          setBad(prevGood => prevGood + 1);
          return;
        case 'neutral':
          setNeutral(prevGood => prevGood + 1);
          return;
        default:
          return;
      }
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() !== 0 ? Math.floor((good / countTotalFeedback()) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feadback">
        <FeadbackOptions type="button" options={btnOptions} onLeaveFeedback={onClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>

      {countTotalFeedback() === 0 && <Notification />}
    </>
  );
};
export default App;
