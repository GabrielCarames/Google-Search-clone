import { useSelector } from "react-redux"


const DisplayResults = () => {

    const results = useSelector(state => state.resultsReducer).payload
    const organicResults = results.organic_results
    // const results = JSON.parse(rawResults).payload
    console.log("reuslts", results, typeof results)

    return (
        <div className="results-results-container">
            <div className="results__organic_results-container">
                <ul className="results__list list">
                    {organicResults && organicResults.map((result) => {
                        return (
                            <li className="list__item" key={result.position}>
                                <cite className="list__url-container"><a className="list__url" href={result.link}>{result.link}</a></cite>
                                <a href={result.link} className="list__title">{result.title}</a>
                                <p className="list__snippet" >{result.snippet}</p>
                                <ul className="list__sitelinks sitelinks">
                                    {result.sitelinks && result.sitelinks.expanded.map((sitelink, i) => {
                                        return (
                                            <li className="sitelinks__item" key={i}>
                                                <a href={sitelink.link} className="sitelinks__title">{sitelink.title}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="results__knowledge-container knowledge">
                <header className="knowledge__header">
                    <div className="knowledge__title-container">
                        <h2 className="knowledge__title">
                            Lorem
                        </h2>
                    </div>
                </header>
                <div className="knowledge__data-container">
                    <div className="knowledge__description-container">
                        <div className="knowledge__description">
                        </div>
                    </div>
                    <ul className="knowledge__list list">
                        {/* {results && results.map((result) => {
                            return (
                                <li className="list__item" key={result.position}>
                                    <p className="list__field">{result.title}</p>
                                    <p className="list__value">{result.snippet}</p>
                                </li>
                            )
                        })} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DisplayResults