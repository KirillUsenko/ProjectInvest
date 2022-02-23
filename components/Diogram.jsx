import styles from '../styles/Diogram.module.scss'

const Diogram = ({ percent1, percent2, width, height }) => {
  return (
    <div className={styles.diogram} style={{ width: width + 'px', height: height + 'px' }}>
      <div className={styles.diogram__left} style={{ width: `${width / 100 * percent1 - 2.5}px` }} >{percent1 + '%'}</div>
      <div className={styles.diogram__right} style={{ width: `${width / 100 * percent2 - 2.5}px` }} >{percent2 + '%'}</div>
    </div>
  )
}

export default Diogram
