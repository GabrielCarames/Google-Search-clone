import useSearcherHelper from "../hooks/useSearcherHelper"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const Searcher = () => {

    const { handleChange, searchSubmit, selectCountry, getCountryValue, selectRegion, getRegionValue } = useSearcherHelper()

    return (
        <main className="searcher-main">
            <div className="searcher-searcher-container">
                <div className="searcher__logo-container">
                    <img className="searcher__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google-logo" />
                </div>
                <div className="searcher__input-container">
                    <div className="searcher__search-icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <input className="searcher__input" name="search" type="text" onChange={handleChange}>

                    </input>
                </div>
                <div className="searcher__country-picker">
                    <CountryDropdown
                        defaultOptionLabel={"Select Country"}
                        value={getCountryValue()}
                        onChange={(val) => selectCountry(val)}
                        classes="searcher__country"
                        />
                        <RegionDropdown
                            country={getCountryValue()}
                            value={getRegionValue()}
                            blankOptionLabel="Select Region"
                            onChange={(val) => selectRegion(val)}
                            classes="searcher__region"
                            blacklist={{
                                AR: ["Capital Federal"],
                            }}
                        />
                </div>
                <div className="searcher__buttons-container">
                    <button className="searcher__search-button" onClick={() => {searchSubmit()}}>
                        Buscar con Google
                    </button>
                </div>
            </div>
        </main>

    )
    
}

export default Searcher