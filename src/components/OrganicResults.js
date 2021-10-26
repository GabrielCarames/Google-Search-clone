
const OrganicResults = ({organicResults}) => {

    return (
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
    )
}

export default OrganicResults