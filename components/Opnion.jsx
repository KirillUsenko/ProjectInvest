import styles from '../styles/Opnion.module.scss'
import Image from 'next/image'

const Opnion = ({ title, author, date }) => {
  return (
    <div className={styles.opnion}>
      <div className={styles.opnion__image}>
        <Image src="/opnion/01.jpg" width="77px" height="77px" />
      </div>

      <div className={styles.opnion__inner}>
        <a href="#" className={styles.opnion__title}>Gold Withstands Storm. Will Miners Drag It Off The Raft?</a>
        <span className={styles.opnion__data}>By <a href="#">{author}</a>, {date}</span>
      </div>
    </div>
  )
}

export default Opnion
