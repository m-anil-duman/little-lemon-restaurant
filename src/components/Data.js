import useApi from "./useApi"

const BASE_URL = 'https://little-lemon-restaurant-database.onrender.com'
export function useFetchData (type,options = {}){
    const url =  `${BASE_URL}/${type}`
    return useApi(url,options)
}