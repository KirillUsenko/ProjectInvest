import { useState } from 'react'
import styles from '../styles/Tabs.module.scss'

const Tabs = ({ children }) => {
  const [ active, setActive ] = useState(0)
  const items = []

  children.forEach(tab => {
    tab.props.children.forEach(item => {
      if (item.type === 'h5') {
        const itemData = {
          title: item.props.children,
          content: tab.props.children[1]
        }
        items.push(itemData)
      }
    })
  })

  const openTab = e => setActive(e.target.getAttribute('data-index'))


  return (
    <>
      <div className={styles.tabs}>
        {items.map((n, i) => (
          <button
            className={`${styles.tab} ${i == active ? styles.tab__active : ''}`}
            onClick={openTab}
            data-index={i}
            key={i}
          >{n.title}</button>
        ))}
      </div>

      {items[active] && items[active].content}
    </>
  )
}

export default Tabs
