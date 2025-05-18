import styles from './Questions.module.css';

function Questions({test, check}) {
  return (
    <div>
      <h3>{test.question}</h3>
      <ul>
        {test.answers.map((item, index) => <li key={index} onClick={() => check(index)}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Questions;