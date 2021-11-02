import { useSelector } from "react-redux"
import Ads from "./Ads"
import InlineTweets from "./InlineTweets"
import InlineVideos from "./InlineVideos"
import KnowledgeGraph from "./KnowledgeGraph"
import LocalMap from "./LocalMap"
import LocalResults from "./LocalResults"
import OrganicResults from "./OrganicResults"
import Pagination from "./Pagination"
import RelatedQuestions from "./RelatedQuestions"
import RelatedSearches from "./RelatedSearches"
import TopStories from "./TopStories"


const DisplayResults = () => {

    const results = useSelector(state => state.resultsReducer).payload
    // const results = useSelector(state => state.resultsReducer)
    const { ads, organic_results, knowledge_graph, top_stories, related_questions, related_searches, pagination, inline_tweets, local_map, local_results, inline_videos } = results
    console.log("reuslts", results)
    localStorage.setItem('cosa', JSON.stringify(local_map))

    return (
        
        <div className="results-results-container">
            <div className="results__left-section">
                {top_stories && <TopStories topStories={top_stories} />}
                {related_questions && <RelatedQuestions relatedQuestions={related_questions} />}
                <Ads ads={ads} />
                {local_map && local_map.image && <LocalMap localMap={local_map} />}
                {local_results && <LocalResults localResults={local_results} />} 
                {inline_tweets && <InlineTweets inlineTweets={inline_tweets} />}
                <OrganicResults organicResults={organic_results} />
                {inline_videos && <InlineVideos inlineVideos={inline_videos} />}
                {related_searches && <RelatedSearches relatedSearches={related_searches} />}
                <Pagination pagination={pagination} />
            </div>
            <KnowledgeGraph knowledgeGraph={knowledge_graph} />
        </div>
    )
}

export default DisplayResults