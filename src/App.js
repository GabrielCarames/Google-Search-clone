import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./components/Results";
import Searcher from "./components/Searcher";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Searcher} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
