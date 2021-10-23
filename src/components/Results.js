import useSearcherHelper from "../hooks/useSearcherHelper"

const Results = () => {

    const { handleChange, searchSubmit } = useSearcherHelper()

    return (
        <main className="results-main">
            <div className="results-container">
                <nav className="results-navbar navbar">
                    <div className="navbar__logo-container">
                        <a className="navbar__back-home" href="#/">
                            <img className="navbar__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google-logo" />
                        </a>
                    </div>
                    <div className="navbar__input-container">
                        <div className="navbar__input-container-section">
                            <div className="navbar__search-icon">
                                <i className="fas fa-search"></i>
                            </div>
                            <input className="navbar__input" name="search" type="text" onChange={handleChange}>

                            </input>
                        </div>
                    </div>
                    <div className="navbar__dark-mode-container">
                        <div className="navbar__dark-mode">

                        </div>
                    </div>
                </nav>
                <div className="results-results-container">
                    <div className="results__organic_results-container">
                        <ul className="results__list list">
                            <li className="list__item">
                                <div className="list__url-container">
                                    <p className="list__url">https://www.hola.com.ar</p>
                                </div>
                                <div className="list__title-container">
                                    <h3 className="list__title">COMPRA GAMER esta bueno comprame gamer</h3>
                                </div>
                                <div className="list__snippet-container">
                                    <p className="list__snippet" >Últimas Noticias de Revista ¡HOLA!: Floppy Tesouro abre las puertas de su nuevo departamento con unas vistas impresionantes, ¿Quién es Pauline Ducret, ...</p>
                                </div>
                            </li>
                            <li className="list__item">
                                <div className="list__url-container">
                                    <p className="list__url">https://www.hola.com.ar</p>
                                </div>
                                <div className="list__title-container">
                                    <h3 className="list__title">COMPRA GAMER esta bueno comprame gamer</h3>
                                </div>
                                <div className="list__snippet-container">
                                    <p className="list__snippet" >Últimas Noticias de Revista ¡HOLA!: Floppy Tesouro abre las puertas de su nuevo departamento con unas vistas impresionantes, ¿Quién es Pauline Ducret, ...</p>
                                </div>
                            </li>
                            <li className="list__item">
                                <div className="list__url-container">
                                    <p className="list__url">https://www.hola.com.ar</p>
                                </div>
                                <div className="list__title-container">
                                    <h3 className="list__title">COMPRA GAMER esta bueno comprame gamer</h3>
                                </div>
                                <div className="list__snippet-container">
                                    <p className="list__snippet" >Últimas Noticias de Revista ¡HOLA!: Floppy Tesouro abre las puertas de su nuevo departamento con unas vistas impresionantes, ¿Quién es Pauline Ducret, ...</p>
                                </div>
                            </li>
                            <li className="list__item">
                                <div className="list__url-container">
                                    <p className="list__url">https://www.hola.com.ar</p>
                                </div>
                                <div className="list__title-container">
                                    <h3 className="list__title">COMPRA GAMER esta bueno comprame gamer</h3>
                                </div>
                                <div className="list__snippet-container">
                                    <p className="list__snippet" >Últimas Noticias de Revista ¡HOLA!: Floppy Tesouro abre las puertas de su nuevo departamento con unas vistas impresionantes, ¿Quién es Pauline Ducret, ...</p>
                                </div>
                            </li>
                            <li className="list__item">
                                <div className="list__url-container">
                                    <p className="list__url">https://www.hola.com.ar</p>
                                </div>
                                <div className="list__title-container">
                                    <h3 className="list__title">COMPRA GAMER esta bueno comprame gamer</h3>
                                </div>
                                <div className="list__snippet-container">
                                    <p className="list__snippet" >Últimas Noticias de Revista ¡HOLA!: Floppy Tesouro abre las puertas de su nuevo departamento con unas vistas impresionantes, ¿Quién es Pauline Ducret, ...</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="results__knowledge-container knowledge">
                        <header className="knowledge__header">
                            <div className="knowledge__title-container">
                                <h2 className="knowledge__title">
                                    Lorem
                                </h2>
                            </div>
                        </header>
                        <div className="knowledge__data-container">
                            <div className="knowledge__description-container">
                                <div className="knowledge__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quis eum dicta ab ut quia nesciunt minus, perferendis voluptas molestiae qui dignissimos tempore quas, et iusto molestias mollitia adipisci est!
                                </div>
                            </div>
                            <ul className="knowledge__list list">
                                <li className="list__item">
                                    <p className="list__field">Lorem</p>
                                    <p className="list__value">Lorem ipsum dolor sit amet</p>
                                </li>
                                <li className="list__item">
                                    <p className="list__field">Lorem</p>
                                    <p className="list__value">Lorem ipsum dolo</p>
                                </li>
                                <li className="list__item">
                                    <p className="list__field">Lorem</p>
                                    <p className="list__value">Lor</p>
                                </li>
                                <li className="list__item">
                                    <p className="list__field">Lorem</p>
                                    <p className="list__value">Lorem ipsum dolor sit amet</p>
                                </li>
                                <li className="list__item">
                                    <p className="list__field">Lorem</p>
                                    <p className="list__value">Lorem ipsum dolor sit ametasdasdqweqweasdasdsaddasdas</p>
                                </li>
                                <li className="list__item">
                                    <p className="list__field">Lorem</p>
                                    <p className="list__value">Lorem ipsum dolor sit amet</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 

export default Results