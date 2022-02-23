import { cryptoList } from './Data'
import axios from 'axios'

export async function fetchCryptoRating(setCryptoServerData, setIsCryptoDataLoading, isMobile) {
    const responce = await axios.get('https://api.coincap.io/v2/assets')
    cryptoRating(cryptoList, responce.data, setCryptoServerData, setIsCryptoDataLoading, isMobile)
}

export function cryptoRating(cryptoList, serverData, setCryptoServerData, setIsCryptoDataLoading, isMobile) {
    serverData = serverData.data.filter(item => cryptoList.indexOf(item.symbol) != -1)
    const tables = []
    serverData.forEach(item => {
        console.log(item)
        const itemData = isMobile ? [
            item.name,
            `${parseInt(item.priceUsd)} $`,
            `${parseFloat(item.changePercent24Hr).toFixed(2)} %`
        ] : [
            item.name,
            item.symbol,
            `${parseInt(item.priceUsd)} $`,
            `${parseInt(item.marketCapUsd)} $`,
            `${parseFloat(item.changePercent24Hr).toFixed(2)} %`
        ]
        tables.push(itemData)
    })
    setCryptoServerData(tables)
    setIsCryptoDataLoading(false)
}