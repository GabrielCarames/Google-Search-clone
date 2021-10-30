
const OrganicResults = ({organicResults}) => {

    const displaySiteLinks = (sitelinks) => {
        return (
            <ul className="list__sitelinks sitelinks">
                {sitelinks && sitelinks.map((sitelink, i) => {
                    return (
                        <li className="sitelinks__item" key={i}>
                            <a href={sitelink.link} className="sitelinks__title">{sitelink.title}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }


    return (
        <div className="results__organic_results-container">
            <ul className="results__list list">
                {organicResults && organicResults.map((result) => {
                    return (
                        <li className="list__item" key={result.position}>
                            <cite className="list__url-container"><a className="list__url" href={result.link}>{result.link}</a></cite>
                            <a href={result.link} className="list__title">{result.title}</a>
                            <p className="list__snippet" >{result.snippet}</p>
                            {result.sitelinks ? result.sitelinks ? displaySiteLinks(result.sitelinks.inline) : displaySiteLinks(result.sitelinks.expanded) : ''} 
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default OrganicResults