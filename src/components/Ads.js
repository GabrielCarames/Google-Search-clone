const Ads = ({ads}) => {
    return (
        <div className="ads-container">
            <ul className="ads__list list">
                {ads.map((ad) => {
                    return (
                        <li className="list__item" key={ad.position}>
                            <cite className="list__url-container"><a className="list__url" href={ad.link}><b style={{fontSize:"14px"}}>Ad</b><span style={{padding:"0 5px"}}>·</span>{ad.link}</a></cite>
                            <a href={ad.link} className="list__title">{ad.title}</a>
                            <p className="list__snippet" >{ad.description}</p>
                            <ul className="list__sitelinks sitelinks">
                                {ad.sitelinks && ad.sitelinks.map((sitelink, i) => {
                                    return (
                                        <li className="sitelinks__item" key={i}>
                                            <a href={sitelink.link} className="sitelinks__title">{sitelink.title}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Ads