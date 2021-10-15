import './App.css';
import Menu from './Menu';
import Casos from './Casos';
import Sobre from './Sobre';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/">
            <Casos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
