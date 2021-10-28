
const TopStories = ({topStories}) => {
    return (
        <div className="top-histories-container">
            <div className="top-histories__title-container">
                <i className="far fa-newspaper"></i>
                <h3 className="top-histories__title">Top stories</h3>
            </div>
            <ul className="top-histories__list list">
                {topStories && topStories.map((story, id) => {
                    return (
                        <li className="list__item" key={id}>
                            <a href={story.link}><img className="list__img" src={story.thumbnail} alt="" /></a>
                            <a className="list__source" href={story.link}>{story.source}</a>
                            <a className="list__title" href={story.link}>{story.title}</a>
                            <a className="list__date" href={story.link}>{story.date}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TopStories