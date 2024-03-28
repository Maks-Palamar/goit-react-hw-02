import React from 'react'
import App from '../../App'

const Feedback = ({value, totalFeedback, positiveFeed}) => {
  return (
      <>
          <p>Good: {value.good}</p>
          <p>Neutral: {value.neutral}</p>
          <p>Bad: {value.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeed}%</p>
          
      </>
  )
}

export default Feedback