
const InlineVideos = ({inlineVideos}) => {
    
    return (
        <div className="inline-videos-container">
            <div className="inline-videos__title-container">
                <i className="fab fa-youtube" aria-hidden="true"></i>
                <h3 className="inline-videos__title">Videos</h3>
            </div>
            <ul className="inline-videos__list list">
                {
                    inlineVideos.map((video) => {
                        return (
                            <li className="list__item-container" key={video.position}>
                                <a className="list__item" href={video.link}>
                                    <div className="list__image-container"></div>
                                    <div className="list__description-container">
                                        <h4 className="list__title">{video.title}</h4>
                                        <p className="list__source">{video.source}</p>
                                        <span className="list__date">{video.date}</span>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default InlineVideos