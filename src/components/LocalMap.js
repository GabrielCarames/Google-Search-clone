const LocalMap = ({localMap}) => {
    return (
        <div className="local-map-container" id='local-map-container'>
            <div className="local-map map">
                <h3 className="map__image-title">Map</h3>
                <a className="map__image-container" href={localMap.link}>
                    <img className="map__image" src={localMap.image} alt="map" />
                </a>
            </div>
        </div>
        
    )
}



export default LocalMap