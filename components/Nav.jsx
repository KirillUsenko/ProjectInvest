import styles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"container " + styles.nav__container}>
        <span className={styles.nav__logo}>logo</span>
        <input type="text" className={styles.nav__input} placeholder="Поиск по сайту" />
        <button className={styles.nav__lang}>ru</button>
        <button className={styles.nav__login}>вход</button>
      </div>
    </nav>
  )
}

export default Nav
