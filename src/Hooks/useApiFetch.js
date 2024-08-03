import { useState, useEffect } from 'react'
import axios from 'axios';

const useApiFetch = (api_url) => {
    console.log(api_url);
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(api_url)
                setData(response)
            } catch (error) {
                console.log("Data can't be fecthed", error);
            }
        }
        fetchData();
    }, [api_url])
    return { data }
}

export default useApiFetch
