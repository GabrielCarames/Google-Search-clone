
const RelatedSearches = ({relatedSearches}) => {
    const relatedSearchesGroup = relatedSearches.filter((search) => search.type === "group")
    const relatedSearchesStandard = relatedSearches.filter((search) => search.type === "standard")

    return (
        <div className="related-searches-container">
            <header className="realted-searches__header">
                <h3 className="related-searches__title">Related searches</h3>
            </header>
            <div className="related-searches__body body">
                {
                    relatedSearchesGroup.length >= 1 && 
                    <div className="related-searches__group-container group">
                        <h4 className="group__title">{relatedSearches[0].group_name}</h4>
                        <ul className="group__list list">
                            {
                                relatedSearchesGroup && relatedSearchesGroup.map((search, id) => {
                                    return (
                                        <li className="list__item" key={id}>
                                            <div className="list__image"></div>
                                            <a className="list__query" href={search.link}>{search.query}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
                <div className="related-searches__group-standard standard">
                    <ul className="standard__list">
                        {
                            relatedSearchesStandard && relatedSearchesStandard.map((search, id) => {
                                return (
                                    <a className="list__item-container" href={search.link} key={id}>
                                        <li className="list__item">
                                            <i className="fas fa-search"></i>
                                            <p className="list__link">{search.query}</p>
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RelatedSearches