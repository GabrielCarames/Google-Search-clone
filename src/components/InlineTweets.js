
const InlineTweets = ({inlineTweets}) => {

    return (
        <div className="inline-tweets-container">
            <div className="inline-tweets__title-container">
                <h3 className="inline-tweets__title">{inlineTweets[0].title} · Twitter</h3>
            </div>
            <ul className="inline-tweets__list list">
                {inlineTweets.map((tweet, id) => {
                    return (
                        <li className="list__item" key={id}>
                            <a href="">
                                <img className="list__img" src={tweet.thumbnail} alt="" />
                                <cite className="list__source" href={tweet.link}>{tweet.source}</cite>
                                <p className="list__snippet" href={tweet.link}>{tweet.snippet}</p>
                                <p className="list__date" href={tweet.link}>Twitter {tweet.date}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default InlineTweets