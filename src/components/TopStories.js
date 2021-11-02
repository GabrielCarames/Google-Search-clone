const TopStories = ({topStories}) => {
    return (
        <div className="top-histories-container">
            <div className="top-histories__title-container">
                <i className="far fa-newspaper"></i>
                <h3 className="top-histories__title">Top stories</h3>
            </div>
            <div className="top-histories__list list">
                {topStories.map((story, id) => {
                    return (
                        <div className="list__item" key={id}>
                            <div className="list__image-container">
                                <img className="list__img" src={story.thumbnail} alt="" />
                            </div>
                            <a className="list__source" href={story.link}>{story.source}</a>
                            <a className="list__title" href={story.link}>{story.title}</a>
                            <a className="list__date" href={story.link}>{story.date}</a>
                        </div>
                    )
                })}
            </div>
                {/* <div class="row" style={{display:'flex', overflowX:'scroll', marginTop:'20px'}}>
                    {topStories.map((story, id) => {
                        return (
                            <div class="card">
                        <img className="list__img" src={story.thumbnail} alt="" />
                        <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        )
                    })}
                    <div class="card">
                    <img src="https://picsum.photos/300/200"/ >
                    <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>/
                    <div class="card">/
                    <img src="https://picsum.photos/300/200"/>
                    <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>/
                    <div class="card">/
                    <img src="https://picsum.photos/300/200"/>
                    <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>/
                    <div class="card">/
                    <img src="https://picsum.photos/300/200"/>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>

                </div> */}
                {/* <div class="row" style={{display:'flex', overflowX:'scroll', marginTop:'20px'}}>
                    <div class="card">
                    <img src="https://picsum.photos/300/200"/ >
                    <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>/
                    <div class="card">/
                    <img src="https://picsum.photos/300/200"/>
                    <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>/
                    <div class="card">/
                    <img src="https://picsum.photos/300/200"/>
                    <p class="card-text">This is a wider car/d with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>/
                    <div class="card">/
                    <img src="https://picsum.photos/300/200"/>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>

                </div> */}
        </div>
    )
}

export default TopStories