import { useSelector } from "react-redux"
import Ads from "./Ads"
import KnowledgeGraph from "./KnowledgeGraph"
import OrganicResults from "./OrganicResults"
import RelatedQuestions from "./RelatedQuestions"
import TopStories from "./TopStories"


const DisplayResults = () => {

    // const results = useSelector(state => state.resultsReducer).payload
    const results = useSelector(state => state.resultsReducer)
    const { ads, organic_results, knowledge_graph, top_stories, related_questions } = results
    console.log("reuslts", results)

    return (
        
        <div className="results-results-container">
            <div className="results__left-section">
                <TopStories topStories={top_stories} />
                <RelatedQuestions relatedQuestions={related_questions} />
                <Ads ads={ads} />
                <OrganicResults organicResults={organic_results} />
            </div>
            <KnowledgeGraph knowledgeGraph={knowledge_graph} />
        </div>
    )
}

export default DisplayResults