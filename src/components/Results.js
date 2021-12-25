import { useSelector } from "react-redux"
import { useContext } from "react"
import useSearcherHelper from "../hooks/useSearcherHelper"
import LoadingContext from "../contexts/LoadingContext"
import SkeletonResults from "./SkeletonResults"
import DisplayResults from "./DisplayResults"

const Results = () => {
    const resultsState = useSelector(state => state.resultsReducer)
    const { loadingResults } = useContext(LoadingContext)
    const { handleChange } = useSearcherHelper()
    let results
    if(resultsState) results = resultsState.payload
    localStorage.removeItem('results')

    return (
        <main className="results-main">
            <div className="results-container">
                <div className="results-navbar-container">
                    <nav className="results-navbar navbar">
                        <div className="navbar__logo-container">
                            <a className="navbar__back-home" href="/">
                                <img className="navbar__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google-logo" />
                            </a>
                        </div>
                        <div className="navbar__input-container">
                            <div className="navbar__input-container-section">
                                <div className="navbar__search-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <input className="navbar__input" name="search" type="search" placeholder={results && results.search_parameters && JSON.parse(results.search_parameters.q).search} onChange={handleChange}>

                                </input>
                            </div>
                        </div>
                        <div className="navbar__dark-mode-container">
                            <div className="navbar__dark-mode">

                            </div>
                        </div>
                    </nav>
                    <div className="results-navbar-results-sections sections">
                        <ul className="sections__list list">
                            <li className="list__item">
                                <i className="fas fa-search"></i>
                                <h3 className="list__title">All</h3>
                            </li>
                            <li className="list__item" onClick={() => alert("Not available yet")}>
                                <i className="far fa-newspaper"></i>
                                <h3 className="list__title">News</h3>
                            </li>
                            <li className="list__item" onClick={() => alert("Not available yet")}>
                                <i className="far fa-image"></i>
                                <h3 className="list__title">Images</h3>
                            </li>
                            <li className="list__item" onClick={() => alert("Not available yet")}>
                                <i className="fab fa-youtube"></i>
                                <h3 className="list__title">Videos</h3>
                            </li>
                        </ul>
                    </div>
                    {results && 
                        <h3 className="results-navbar__search-metadata">
                            About {results.search_information && results.search_information.total_results.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results ({results && results.search_information && results.search_information.time_taken_displayed} seconds)
                        </h3>
                    }
                </div>
                {loadingResults ? <SkeletonResults/> : <DisplayResults />}
            </div>
        </main>
    )
} 

export default Results