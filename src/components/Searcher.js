import { useDispatch, useSelector } from "react-redux";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import useSearcherHelper from "../hooks/useSearcherHelper"

const Searcher = () => {
    const { handleChange, searchSubmit} = useSearcherHelper()
    const dispatch = useDispatch()
    const location = useSelector(state => state.locationReducer)

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
                        value={location.country}
                        onChange={(val) => dispatch({
                            type: '@updateCountry',
                            payload: val
                        })}
                        classes="searcher__country"
                    />
                    <RegionDropdown
                        country={location.country}
                        value={location.region}
                        blankOptionLabel="Select Region"
                        onChange={(val) => dispatch({
                            type: '@updateRegion',
                            payload: val
                        })}
                        classes="searcher__region"
                        blacklist={{
                            AR: ["Capital Federal"],
                        }}
                    />
                </div>
                <div className="searcher__buttons-container">
                    <button className="searcher__search-button" onClick={() => {searchSubmit()}}>
                        Search with Google
                    </button>
                </div>
            </div>
        </main>

    )
    
}

export default Searcher