import useSearcherHelper from "../hooks/useSearcherHelper"

const Results = () => {

    const { handleChange, searchSubmit } = useSearcherHelper()

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
                <div className="results-results-container">
                    <div className="results__organic_results-container">
                        <ul className="results__list list">
                            <li className="list__item">

                            </li>
                        </ul>
                    </div>
                    <div className="results__knowledge-container">

                    </div>
                </div>
            </div>
        </main>
    )
} 

export default Results