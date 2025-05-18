import styles from './Results.module.css';
import questions from '../../questions';

function Results({ result }) {
  return (
    <div className={styles.results_box}>
<svg width="86px" height="86px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M321.584 278.64L208.696 66.648H20.432l182.008 329.872zM677.368 327.552l140.808-260.904h188.28l-203.648 366.272z" fill="#0092D2"></path><path d="M878.856 577.768c0 201.792-163.568 365.424-365.48 365.424-201.792 0-365.36-163.632-365.36-365.424 0-201.848 163.576-365.456 365.36-365.456 201.912 0 365.48 163.6 365.48 365.456z" fill="#F5B146"></path><path d="M513.384 212.312c-201.792 0-365.36 163.6-365.36 365.456 0 107.36 46.568 203.576 120.272 270.464l515.616-515.616c-66.856-73.704-163.136-120.304-270.528-120.304z" fill="#EF962F"></path><path d="M513.44 393l60.032 121.616 134.264 19.528-97.168 94.688 22.936 133.672-120.064-63.12-120.064 63.12 22.936-133.672-97.16-94.688 134.256-19.528z" fill="#E5226B"></path><path d="M598.28 518.232l-24.808-3.616-60.032-121.616-60.032 121.616-134.256 19.528 97.16 94.688-14.792 86.16z" fill="#CB1B5B"></path></g></svg>
      <h3>You have scored {result} correct answers out of {questions.length}</h3>
      <a href="/">
        <button className={styles.btn}>Try again</button>
      </a>
    </div>

  )
}

export default Results;