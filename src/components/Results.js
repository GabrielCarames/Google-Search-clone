import useSearcherHelper from "../hooks/useSearcherHelper"
import LoadingContext from "../contexts/LoadingContext"
import { useContext } from "react"
import SkeletonResults from "./SkeletonResults"
import DisplayResults from "./DisplayResults"

const Results = () => {

    const { handleChange } = useSearcherHelper()
    const { loadingResults } = useContext(LoadingContext)

    return (
        <main className="results-main">
            <div className="results-container">
                <nav className="results-navbar navbar">
                    <div className="navbar__logo-container">
                        <a className="navbar__back-home" href="#/">
                            <img className="navbar__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google-logo" />
                        </a>
                    </div>
                    <div className="navbar__input-container">
                        <div className="navbar__input-container-section">
                            <div className="navbar__search-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <input className="navbar__input" name="search" type="text" onChange={handleChange}>

                            </input>
                        </div>
                    </div>
                    <div className="navbar__dark-mode-container">
                        <div className="navbar__dark-mode">

                        </div>
                    </div>
                </nav>
                {loadingResults ? <SkeletonResults/> : <DisplayResults />}
            </div>
        </main>
    )
} 

export default Results