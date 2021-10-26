import { useSelector } from "react-redux"
import KnowledgeGraph from "./KnowledgeGraph"
import OrganicResults from "./OrganicResults"


const DisplayResults = () => {

    // const results = useSelector(state => state.resultsReducer).payload
    const results = useSelector(state => state.resultsReducer)
    const organicResults = results.organic_results
    const knowledgeGraph = results.knowledge_graph
    // const results = JSON.parse(rawResults).payload
    console.log("reuslts", results, typeof results)

    return (
        <div className="results-results-container">
            <OrganicResults organicResults={organicResults} />
            <KnowledgeGraph knowledgeGraph={knowledgeGraph} />
        </div>
    )
}

export default DisplayResults