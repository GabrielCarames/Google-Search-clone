import { useState } from "react"

const RelatedQuestions = ({relatedQuestions}) => {
    const [ activeAccordion, setActiveAccordion ] = useState(null)

    return (
        <div className="related-questions-container">
            <h2 className="related-questions__title">
                People also ask
            </h2>
            <ul className="related-questions__list list">
                {
                    relatedQuestions.map((question, id) => {
                        return (
                            <li className="list__item" key={id}>
                                <div className="list__accordion-header header" onClick={() => activeAccordion === id ? setActiveAccordion(false) : setActiveAccordion(id)}>
                                    <h4 className="header__title">{question.question}</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className={activeAccordion === id ? "list__accordion-body active body" : "list__accordion-body body"}>
                                    <p className="body__text">{question.answer}</p>
                                    <cite className="body__link-container"><a className="body__link" href={question.source && question.source.link}>{question.source && question.source.displayed_link}</a></cite>
                                    <a className="body__title" href={question.source && question.source.link}>{question.source && question.source.title}</a>
                                    <p className="body__search-for-title">Search for: 
                                        <a className="body__search-for" href={question.search && question.search.link}>
                                            {question.question}
                                        </a>
                                    </p>
                                    
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RelatedQuestions