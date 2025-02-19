import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default  function UseCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => {
                if (response.data && response.data[currency]) {
                     setData(response.data[currency])
                }
                else {
                    console.log(`Data of ${currency} not found`)
                    setData({})
                }
            }
            )
            .catch((error) => {
                console.log('Error in fecting request', error)
                setData({})
            })
    }, [currency])
    return data
}
