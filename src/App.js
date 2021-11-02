import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { useState } from "react";
import LoadingContext from "./contexts/LoadingContext";
import Searcher from "./components/Searcher";
import Results from "./components/Results";

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
