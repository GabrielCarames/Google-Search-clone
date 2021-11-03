import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingContext from "../contexts/LoadingContext"
import axios from "axios"

export function useSearcherHelper () {

    const [ country, setCountry] = useState(undefined)
    const [ region, setRegion] = useState(undefined)
    // const [ search, setSearch] = useState(null)

    const { setLoadingResults } = useContext(LoadingContext)
    const dispatch = useDispatch()
    let history = useHistory()
    const search = useSelector(state => state.searchReducer)
    console.log("search del reducer base", search)
    const handleChange = (e) => {
        dispatch({
            type: '@updateSearch',
            payload: {[e.target.name]: e.target.value}
        })
        // setSearch({
        //     ...search,
        //     [e.target.name]: e.target.value
        // })
    }
    
    const searchSubmit = (manualSearch) => {
        console.log("states", country, region, search)
        let toSearch
        if(manualSearch) toSearch = manualSearch
        else toSearch = search.payload.search
        history.push("/results")
        const params = {
            api_key: "5F6850F10FB74BA198C5CECD43E031F3",
            q: toSearch,
            "location": `${region} Province,${country}`,
        }
        
        setLoadingResults(true)
        axios.get('https://api.scaleserp.com/search', { params })
        .then(response => {
            console.log("search", response.data)
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

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            if (document.activeElement.classList[0] === 'navbar__input') {
                event.preventDefault();
                console.log("enter", document.activeElement.value, search)
                // setSearch(document.activeElement.value)
                // dispatch({
                //     type: '@updateSearch',
                //     payload: document.activeElement.value
                // })
                searchSubmit(document.activeElement.value)
                document.activeElement.value = ''
                document.activeElement.defaultValue = ''
            }
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
      }, []);

    return {
        handleChange, searchSubmit, selectCountry, getCountryValue, selectRegion, getRegionValue
    }
}

export default useSearcherHelper