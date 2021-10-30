
const LocalResults = ({localResults}) => {

    return (
        <div className="local-results-container">
            <ul className="local-results__list list">
                {
                    localResults.map((result) => {
                        return (
                            <li className="list__item" key={result.position}>
                                <div className="list__data-container">
                                    <h5 className="list__title">{result.title}</h5>
                                    <p className="list__rating">{result.rating}</p>
                                    <p className="list__ubication">{result.extensions[4]}</p>
                                    <p className="list__description">{result.extensions[6]}</p>
                                </div>
                                <div className="list__image-container">
                                    <img className="list__image" src={result.image} alt="place" />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LocalResults