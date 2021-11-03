
const KnowledgeGraph = ({knowledgeGraph}) => {

    const attributesFilter = (knowledgeGraph) => {
        const filteredAttributes = knowledgeGraph.known_attributes.filter((attribute) => attribute.attribute.search("downwards") === -1)
        return filteredAttributes.slice(0, 5).map((attribute, i) => {
            return (
                <li className="list__item" key={i}>
                    <a className="list__link" href={attribute.link}><p className="list__name">{attribute.name}</p></a>
                    <p className="list__value">{attribute.value}</p>
                </li>
            )
        })
    }

    return (
        <div className="results__knowledge-container knowledge">
            <header className="knowledge__header">
                <div className="knowledge__images-container">
                    {
                        knowledgeGraph.images.map((image, id) => {
                            return (
                                <img className="knowledge__image" src={image} alt="" key={id} />
                            )
                        })
                    }
                </div>
                <div className="knowledge__title-container">
                    <h2 className="knowledge__title">{knowledgeGraph.title}</h2>
                    <h3 className="knowledge__type">{knowledgeGraph.type}</h3>
                </div>
            </header>
            <div className="knowledge__data-container">
                <div className="knowledge__description-container">
                    <p className="knowledge__description">{knowledgeGraph.description}</p>
                    <a className="knowledge__source" href={knowledgeGraph.source && knowledgeGraph.source.link}>{knowledgeGraph.source && knowledgeGraph.source.name}</a>
                </div>
                <ul className="knowledge__known-attributes list">
                    {knowledgeGraph.known_attributes && attributesFilter(knowledgeGraph)}
                </ul>
            </div>
        </div>
    )
}

export default KnowledgeGraph