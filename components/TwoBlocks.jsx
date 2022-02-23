import styles from '../styles/TwoBlocks.module.scss';

const TwoBlocks = ({ children }) => {
  return (
    <div className={styles.flex}>
      <div className={styles.left}>{children[0]}</div>
      <div className={styles.right}>{children[1]}</div>
    </div>
  )
}

export default TwoBlocks
