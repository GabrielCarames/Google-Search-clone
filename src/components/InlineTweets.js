
const InlineTweets = ({inlineTweets}) => {

    return (
        <div className="inline-tweets-container">
            <div className="inline-tweets__title-container">
                <h3 className="inline-tweets__title">{inlineTweets[0].title} · Twitter</h3>
            </div>
            <ul className="inline-tweets__list list">
                {inlineTweets && inlineTweets.map((tweet, id) => {
                    return (
                        <li className="list__item" key={id}>
                            <a href={tweet.link}><img className="list__img" src={tweet.thumbnail} alt="" /></a>
                            <a className="list__source" href={tweet.link}>{tweet.source}</a>
                            <a className="list__snippet" href={tweet.link}>{tweet.snippet}</a>
                            <a className="list__date" href={tweet.link}>Twitter {tweet.date}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default InlineTweets