import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={'container ' + styles.footer__container}>
        <span className={styles.footer__logo}>logo</span>
        <div className={styles.footer__menu}>
          <a href="#" className={styles.footer__link}>news</a>
          <a href="#" className={styles.footer__link}>crypto</a>
          <a href="#" className={styles.footer__link}>investments</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
