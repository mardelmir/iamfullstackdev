import { useState, useEffect } from 'react'

const useFetchData = (urlApi) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi)
                const resData = await response.json()
                setData(resData)
            } catch (error) { console.log(error) }
        }
        fetchData()
    }, [])

    return { data }
}

export default useFetchData