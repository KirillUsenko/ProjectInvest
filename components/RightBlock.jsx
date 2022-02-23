import Image from 'next/image'
import Block from './Block.jsx'
import styles from '../styles/RightBlock.module.scss'

const RightBlock = ({ mas, title, children }) => {
  return (
    <Block className={styles.block}>
      <h2 className={'title ' + styles.title}>{ title }</h2>

      {children}
    </Block>
  )
}

export default RightBlock
