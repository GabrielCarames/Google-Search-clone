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


    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    
    const searchSubmit = () => {
        const toSearch = search.search
        history.push("/results")

        // set up the request parameters
        // const locationParams = {
        //     api_key: "5F6850F10FB74BA198C5CECD43E031F3",
        //     q: "london"
        // }
        
        // axios.get('https://api.scaleserp.com/locations', { locationParams })
        // .then(response => {
        //     console.log(JSON.stringify(response.data, 0, 2));
        // }).catch(error => {
        //     console.log(error);
        // })
        
        const params = {
            api_key: "5F6850F10FB74BA198C5CECD43E031F3",
            q: toSearch,
            "location": "New York,New York,United States",
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

    return {
        handleChange, searchSubmit
    }
}

export default useSearcherHelper