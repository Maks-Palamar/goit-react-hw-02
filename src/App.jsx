import { useState, useEffect } from 'react'
import './App.css'
import Options from './components/Options/Options';
import Description from './components/description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {

    const savedFeedback = window.localStorage.getItem("saved-feedback");
    console.log("savedFeedback:", savedFeedback);
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0 }
    }
  });

  useEffect(() => {
  window.localStorage.setItem("saved-feedback", JSON.stringify(values));
  }, [values]);


  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0
      })
    } else {
      setValues({
        ...values,
        [feedbackType]: values[feedbackType] + 1,
      })
      }
      
  }

  const positiveFeed = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback} 
      />
      {totalFeedback === 0 ?
        <Notification />
        :
        <Feedback
        value={values}
        totalFeedback={totalFeedback}
        positiveFeed={positiveFeed}
      />}
    </>
  )
}

export default App
