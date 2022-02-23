import styles from '../styles/News.module.scss'
import Image from 'next/image'

const News = ({ title, image, big=false }) => {
  return (
    <div className={big ? styles.news + ' ' + styles.news__big : styles.news}>
      <h2 className={styles.news__title}>{ title }</h2>
      <div className={styles.news__image}>
        <Image src='/news/01.jpg' width={big ? '620px' : '300px'} height={big ? '320px' : '155px'} alt="изображение" />
      </div>
      <button className={styles.news__button}>читать</button>
    </div>
  )
}

export default News
