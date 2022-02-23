import styles from '../styles/Block.module.scss'

const Block = ({ className='', children }) => {
  return (
    <div className={styles.block + ' ' + className}>
      {children}
    </div>
  )
}

export default Block
