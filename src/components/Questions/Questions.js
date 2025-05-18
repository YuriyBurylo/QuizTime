import styles from './Questions.module.css';

function Questions({test, check}) {
  return (
    <div className={styles.questions_box}>
      <h3 className={styles.question}>{test.question}</h3>
      <ul>
        {test.answers.map((item, index) => <li className={styles.answer} key={index} onClick={() => check(index)}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Questions;