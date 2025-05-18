import styles from './Results.module.css';
import questions from '../../questions';

function Results({ result }) {
  return (
    <div>
      <h3>You have scored {result} correct answers to {questions.length} questions</h3>
    </div>
  )
}

export default Results;