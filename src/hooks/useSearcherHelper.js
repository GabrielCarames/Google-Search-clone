import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadingContext from "../contexts/LoadingContext"
import axios from "axios"

export function useSearcherHelper () {

    const [ country, setCountry] = useState(undefined)
    const [ region, setRegion] = useState(undefined)
    const [ search, setSearch] = useState(null)

    const { setLoadingResults } = useContext(LoadingContext)
    const dispatch = useDispatch()
    let history = useHistory()

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    
    const searchSubmit = () => {
        const toSearch = search.search
        history.push("/results")
        
        const params = {
            api_key: "5F6850F10FB74BA198C5CECD43E031F3",
            q: toSearch,
            "location": `${region} Province,${country}`,
        }
        
        setLoadingResults(true)
        axios.get('https://api.scaleserp.com/search', { params })
        .then(response => {
            dispatch({
                type: '@updateResults',
                payload: response.data
            })
            setLoadingResults(false)
        }).catch(error => {
            console.log(error);
        })
    }

    const selectCountry = (country) => {
        setCountry(country)
    }

    const getCountryValue = () => {
        return country
    }

    const selectRegion = (region) => {
        setRegion(region)
    }

    const getRegionValue = () => {
        return region
    }

    return {
        handleChange, searchSubmit, selectCountry, getCountryValue, selectRegion, getRegionValue
    }
}

export default useSearcherHelper