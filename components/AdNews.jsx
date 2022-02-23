import Image from 'next/image'
import Block from './Block.jsx'
import styles from '../styles/AdNews.module.scss'

const AdNews = ({ count }) => {
  const mas = []

  for (let i = 0; i < count; i++) {
    mas.push('item')
  }
  return (
    <Block>
      <h2 className="title">Вам также может понравиться</h2>

      <div className={styles.flex}>
        {mas.map((item, index) =>
          <div key={index} className={styles.news}>
            <div className={styles.news__image}>
              <Image src={'/adnews/01.jpg'} width="140px" height="73px" />
            </div>
            <a className={styles.news__title} href="#">Lorem ipsum dolor sit amet</a>
          </div>
        )}
      </div>
    </Block>
  )
}

export default AdNews
