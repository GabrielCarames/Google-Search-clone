

const Searcher = () => {

    return (
        <main className="searcher-main">
            <div className="searcher-searcher-container">
                <div className="searcher__logo-container">
                    <img className="searcher__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="" />
                </div>
                <div className="searcher__input-container">
                    <div className="searcher__search-logo">
                        <i class="fas fa-search"></i>
                    </div>
                    <input className="searcher__input">

                    </input>
                </div>
                <div className="searcher__buttons-container">
                    <button className="searcher__search-button">
                        Buscar con Google
                    </button>
                    <button className="searcher__search-button--lucky">
                        Me siento con suerte
                    </button>
                </div>
            </div>
        </main>

    )
    
}

export default Searcher