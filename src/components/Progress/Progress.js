import styles from './Progress.module.css';

function Progress({progress}) {
  return (
      <div className={styles.progress_section}>
        <h3>Completed: </h3>
        <div className={styles.progress_bar}>
            <div style={{width: `${progress}%`}} className={styles.progress}></div>
        </div>
        <div className={styles.percentage}>{`${progress}%`}</div>
      </div>
  )
}

export default Progress;