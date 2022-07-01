import { useSelector } from "react-redux"
import RelatedQuestions from "./RelatedQuestions"
import RelatedSearches from "./RelatedSearches"
import KnowledgeGraph from "./KnowledgeGraph"
import OrganicResults from "./OrganicResults"
import InlineTweets from "./InlineTweets"
import InlineVideos from "./InlineVideos"
import LocalResults from "./LocalResults"
import Pagination from "./Pagination"
import TopStories from "./TopStories"
import LocalMap from "./LocalMap"
import Ads from "./Ads"

const DisplayResults = () => {
  const results = useSelector(state => state.resultsReducer).payload
  const {
    ads,
    organic_results,
    knowledge_graph,
    top_stories,
    related_questions,
    related_searches,
    pagination,
    inline_tweets,
    local_map,
    local_results,
    inline_videos
  } = results

  return (
    <div className="results-results-container">
      <div className="results__left-section">
        {top_stories && <TopStories topStories={top_stories} />}
        {related_questions && <RelatedQuestions relatedQuestions={related_questions} />}
        {ads && <Ads ads={ads} />}
        {local_map && local_map.image && <LocalMap localMap={local_map} />}
        {local_results && <LocalResults localResults={local_results} />}
        {inline_tweets && <InlineTweets inlineTweets={inline_tweets} />}
        <OrganicResults organicResults={organic_results} />
        {inline_videos && <InlineVideos inlineVideos={inline_videos} />}
        {related_searches && <RelatedSearches relatedSearches={related_searches} />}
        {pagination && <Pagination pagination={pagination} />}
      </div>
      {knowledge_graph && <KnowledgeGraph knowledgeGraph={knowledge_graph} />}
    </div>
  )
}

export default DisplayResults
