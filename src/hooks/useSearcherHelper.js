import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom";

export function useSearcherHelper () {

    const [ search, setSearch] = useState(null)
    let history = useHistory()
    const url = 'https://google-search3.p.rapidapi.com/api/v1/search/'

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    
    const searchSubmit = () => {
        const toSearch = search.search
        history.push("/results")
        // var options = {
        //     method: 'GET',
        //     url: `${url}q=${toSearch}&num=100&lr=lang_en&lr=lang_es&ie=UTF-8`,
        //     headers: {
        //         'x-user-agent': 'desktop',
        //         'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        //         'x-rapidapi-key': '7d349e67bemsh0695bb60cc2ce3dp18873fjsn8dab5e90bb12'
        //     }
        // };
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });

        const params = {
            api_key: "5F6850F10FB74BA198C5CECD43E031F3",
            q: toSearch
        }

        axios.get('https://api.scaleserp.com/search', { params })
        .then(response => {

            // print the JSON response from Scale SERP
            console.log(JSON.stringify(response.data, 0, 2));

        }).catch(error => {
            // catch and print the error
            console.log(error);
        })
    }

    return {
        handleChange, searchSubmit
    }
}

export default useSearcherHelper