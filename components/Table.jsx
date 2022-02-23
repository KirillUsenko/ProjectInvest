import Image from 'next/image'
import styles from '../styles/Table.module.scss'

const Table = ({ columns, tables, width='auto', type='', className='' }) => {
  return (
    <table className={styles.table + ' ' + className}>
      <tbody>
      <tr className={styles.columns}>
        {columns.map((title, index) => <td key={index} className={styles.td + ' ' + styles.column} style={{
          padding: type === '3' ? '2.5px 0' : '', textAlign: type === '3' ? 'center' : 'left'
        }}>{title}</td>)}
      </tr>
      {tables.map((item, index) => <tr key={index} className={styles.tr}>
        {type === '1' ?
          <>
            <td className={styles.td + ' ' + styles.item + ' ' + styles.flex} style={{
                color: item[0].includes('+') ? '#23C14F' : item[0].includes('-') ? '#FF4545' : '#433532',
                textTransform: 'uppercase', marginBottom: '-1px' }}>
                <div className={styles.images}>
                  <Image src={`/flags/${item[0].toLowerCase().split('/')[0]}.jpg`} width="24px" height="16px" />
                  <Image src="/flags/rub.jpg" width="24px" height="16px" />
                </div>
                <span>{item[0]}</span>
            </td>

            {item.map((text, index) =>
              text === item[0] ? '' :
              <td key={index} className={styles.td + ' ' + styles.item} style={{
                  color: text.includes('+') ? '#23C14F' : text.includes('-') ? '#FF4545' : '#433532',
                  textTransform: 'uppercase', width }}>
              {text}
              </td>)}
          </>

          :
          type === '2' ?
          <>
            <td className={styles.td + ' ' + styles.item + ' ' + styles.flex} style={{
                  color: item[0].includes('+') ? '#23C14F' : item[0].includes('-') ? '#FF4545' : '#433532',
                  textTransform: 'uppercase', marginBottom: '-1px' }}>
                  <div className={styles.images}>

                    <Image src={`/icons/${item[0].toLowerCase()}.png`} width="24px" height="24px" />
                  </div>
                  <span>{item[0]}</span>
              </td>

            {item.map((text, index) =>
              text === item[0] ? '' :
              <td key={index} className={styles.td + ' ' + styles.item} style={{
                  color: text.includes('+') ? '#23C14F' : text.includes('-') ? '#FF4545' : '#433532',
                  textTransform: 'uppercase', width }}>
              {text}
              </td>)}
          </>
          :
          item.map((text, index) => <td key={index} className={styles.td + ' ' + styles.item} style={{
            color: text.includes('+') ? '#23C14F' : text.includes('-') ? '#FF4545' : '#433532', width,
            padding: type === '3' ? '2.5px 0' : '', textAlign: type === '3' ? 'center' : 'left'
          }}>{text}</td>)
        }
      </tr>)}
      </tbody>
    </table>
  )
}

export default Table
