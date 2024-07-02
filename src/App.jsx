import { useState } from 'react';

// Button Component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// StatisticLine Component
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Statistics Component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <h2>Statistics</h2>
      {total > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average.toFixed(2)} />
            <StatisticLine text="Positive Feedback" value={`${positivePercentage.toFixed(2)}%`} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

// App Component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
