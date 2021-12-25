
const Pagination = ({pagination}) => {
    let id = 0
    
    return (
        <div className="pagination-container">
            <div className="pagination__more-button-container">
                <a className="pagination__more-button" href={pagination.next}>
                    <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    <p className="pagination__more-button-text">Ver más</p>
                </a>
            </div>
            <div className="pagination__letters letter">
                <p className="letter__G">G</p>
                <ul className="letter__o-list">
                    {
                        pagination.other_pages && Object.entries(pagination.other_pages).map((link) => {
                            id++
                            return (
                                <li className="letter__o-item" key={id} onClick={() => alert("Not avalaible yet")}>
                                    <a className="letter__o-container">
                                        <p className="letter__o">o</p>
                                        <p className="letter__o-page-number">{id}</p>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="letter__last-three last">
                    <a className="last__letters-header" href={pagination.next} >
                        <p className="last__g-letter">g</p>
                        <p className="last__l-letter">l</p>
                        <p className="last__e-letter">e</p>
                        <i className="fas fa-chevron-right"></i>
                    </a>
                    <a className="last__letter-next" href={pagination.next}>Next</a>
                </div>
            </div>
        </div>
    )
}

export default Pagination