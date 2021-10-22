import { BrowserRouter, Route, Switch } from "react-router-dom";
import Searcher from "./components/Searcher";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Searcher} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
