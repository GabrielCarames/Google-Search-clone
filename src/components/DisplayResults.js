import { useSelector } from "react-redux"
import Ads from "./Ads"
import KnowledgeGraph from "./KnowledgeGraph"
import OrganicResults from "./OrganicResults"
import TopStories from "./TopStories"


const DisplayResults = () => {

    // const results = useSelector(state => state.resultsReducer).payload
    const results = useSelector(state => state.resultsReducer)
    const { ads, organic_results, knowledge_graph, top_stories } = results
    console.log("reuslts", results, top_stories)

    return (
        
        <div className="results-results-container">
            <div className="results__left-section">
                <TopStories topStories={top_stories} />
                <Ads ads={ads} />
                <OrganicResults organicResults={organic_results} />
            </div>
            <KnowledgeGraph knowledgeGraph={knowledge_graph} />
        </div>
    )
}

export default DisplayResults