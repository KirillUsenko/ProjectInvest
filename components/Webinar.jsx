import styles from '../styles/Webinar.module.scss'
import Image from 'next/image'

const Webinar = ({ title, date }) => {
  return (
    <div className={styles.webinar}>
      <div className={styles.webinar__image}>
        <Image src="/opnion/01.jpg" width="77px" height="77px" />
      </div>

      <div className={styles.webinar__inner}>
        <a href="#" className={styles.webinar__title}>Gold Withstands Storm. Will Miners Drag It Off The Raft?</a>
        <span className={styles.webinar__data}>{date}</span>
      </div>
    </div>
  )
}

export default Webinar
