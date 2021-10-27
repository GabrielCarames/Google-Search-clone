
const KnowledgeGraph = ({knowledgeGraph}) => {

    return (
        <div className="results__knowledge-container knowledge">
                <header className="knowledge__header">
                    <div className="knowledge__images-container">
                        {/* {
                            knowledgeGraph && knowledgeGraph.images.map((image, i) => {
                                return (
                                    )
                                })
                            } */}
                            <img className="knowledge__image" src={knowledgeGraph.images[0]} alt="" />
                    </div>
                    <div className="knowledge__title-container">
                        <h2 className="knowledge__title">{knowledgeGraph.title}</h2>
                        <h3 className="knowledge__type">{knowledgeGraph.type}</h3>
                    </div>
                </header>
                <hr className="knowledge__hr" />
                <div className="knowledge__data-container">
                    <div className="knowledge__description-container">
                        <p className="knowledge__description">{knowledgeGraph.description}</p>
                        <a className="knowledge__source" href={knowledgeGraph.source.link}>{knowledgeGraph.source.name}</a>
                    </div>
                    <ul className="knowledge__known-attributes list">
                        {
                            knowledgeGraph && knowledgeGraph.known_attributes.slice(0, 5).map((attribute, i) => {
                                return (
                                    <li className="list__item" key={i}>
                                        <a className="list__link" href={attribute.link}><p className="list__name">{attribute.name}</p></a>
                                        <p className="list__value">{attribute.value}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
    )
}

export default KnowledgeGraph