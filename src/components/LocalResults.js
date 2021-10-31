
const LocalResults = ({localResults}) => {

    const displayLetter = (position) => {
        switch (position) {
            case 1: return 'A'
            case 2: return 'B'
            case 3: return 'C'
            default: return position
        }
    }

    return (
        <div className="local-results-container">
            <ul className="local-results__list list">
                {
                    localResults.map((result) => {
                        return (
                            <li className="list__item" key={result.position}>
                                <div className="list__left-section">
                                    {!result.image && <div className="list__letter">{displayLetter(result.position)}</div>}
                                    <div className="list__data-container">
                                        <h4 className="list__title">{result.title}</h4>
                                        <ul className="list__extension-list">
                                            {
                                                result.extensions.map((extension, id) => {
                                                    return (
                                                        <li className="list__extension-item" key={id}>
                                                            {extension}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        {/* <h5 className="list__title">{result.title}</h5>
                                        <p className="list__rating">{result.rating}</p>
                                        <p className="list__ubication">{result.extensions[4]}</p>
                                        <p className="list__description">{result.extensions[6]}</p> */}
                                    </div>

                                </div>
                                <div className="list__right-section">
                                    {result.image ? 
                                        <div className="list__image-container">
                                            <img className="list__image" src={result.image} alt="place" />
                                        </div>
                                        :
                                        <a className="list__website-container" href={result.link}>
                                            <div className="list__website-logo">
                                                <i className="fas fa-globe-americas"></i>
                                            </div>
                                            <p className="list__website">Website</p>
                                        </a>
                                    }
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