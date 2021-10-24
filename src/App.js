import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./components/Results";
import Searcher from "./components/Searcher";
import { useState } from "react";
import LoadingContext from "./contexts/LoadingContext";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    results: state
  }
}

function App() {
  const [ loadingResults, setLoadingResults ] = useState()

  return (
    <div className="app">
      <LoadingContext.Provider value={{loadingResults, setLoadingResults}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Searcher} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </BrowserRouter>
      </LoadingContext.Provider>
    </div>
  );
}

export default connect(mapStateToProps)(App);
