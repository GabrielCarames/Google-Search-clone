import axios from "axios"
import { useContext, useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoadingContext from "../contexts/LoadingContext"
// import { store } from "../store/resultsReducer"

export function useSearcherHelper () {

    const [ search, setSearch] = useState(null)
    let history = useHistory()
    const { setLoadingResults } = useContext(LoadingContext)
    const dispatch = useDispatch()

    const [ country, setCountry] = useState(undefined)
    const [ region, setRegion] = useState(undefined)

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
            // console.log(JSON.stringify(response.data, 0, 2));
            // console.log(JSON.stringify(response.data.organic_results, 0 ,2))
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