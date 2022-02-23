import { valuteList } from './Data'
import axios from 'axios'

export async function fetchValuteRating(setValuteServerData, setIsValuteDataLoading, isMobile) {
    const responce = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    valuteRating(valuteList, responce.data, setValuteServerData, setIsValuteDataLoading, isMobile)
}

export function valuteRating(list, serverData, setValuteServerData, setIsValuteDataLoading, isMobile) {
    const trend = (current, previous) => {
        if (current > previous) return '+'
        if (current < previous) return '-'
        return ''
    }
  
    let valuteData = [] 
    list.forEach(item => {
      valuteData.push(serverData.Valute[item])
    })
    const tables = []
    if (isMobile) {
      valuteData.forEach(item => {
        tables.push([
          `${item.CharCode}/RUB`, `${item.Value.toFixed(2)} ₽`,

          `${item.Value > item.Previous ? '+' : '-'}
          ${item.Value < item.Previous ? 
          `${(item.Value - item.Previous).toFixed(2)}`.slice(1) : 
          `${(item.Value - item.Previous).toFixed(2)}`} ₽`
        ])
      })
    } else {
      valuteData.forEach(item => {
        const change = Math.abs(item.Value - item.Previous)
        tables.push(
          [
            `${item.CharCode}/RUB`, `${item.Value.toFixed(2)} ₽`,

            `${item.Value > item.Previous ? '+' : '-'}
            ${item.Value < item.Previous ? 
            `${(item.Value - item.Previous).toFixed(2)}`.slice(1) : 
            `${(item.Value - item.Previous).toFixed(2)}`} ₽`, 

            `${item.Value > item.Previous ? '+' : '-'}
            ${(change / item.Previous * 100).toFixed(2)} %`
          ]
        )
      })
    }
    setValuteServerData(tables)
    setIsValuteDataLoading(false)
}