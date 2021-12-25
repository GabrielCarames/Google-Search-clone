import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios"
import LoadingContext from "../contexts/LoadingContext"

export function useSearcherHelper () {
    const searchFromReducer = useSelector(state => state.searchReducer)
    const location = useSelector(state => state.locationReducer)
    const { setLoadingResults } = useContext(LoadingContext)
    const dispatch = useDispatch()
    let history = useHistory()

    const handleChange = (e) => {
        dispatch({
            type: '@updateSearch',
            payload: {[e.target.name]: e.target.value}
        })
    }
    
    const searchSubmit = () => {
        localStorage.removeItem('results')
        setLoadingResults(true)
        history.push("/results")
        const params = {
            api_key: "5F6850F10FB74BA198C5CECD43E031F3",
            q: searchFromReducer,
            "location": `${location.region} Province,${location.country}`,
        } 
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

    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            if (document.activeElement.classList[0] === "navbar__input" || document.activeElement.classList[0] === "searcher__input") {
                searchSubmit()
                document.activeElement.value = ''
                document.activeElement.defaultValue = ''
            }
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
      }, [searchFromReducer]);

    return {handleChange, searchSubmit}
}

export default useSearcherHelper