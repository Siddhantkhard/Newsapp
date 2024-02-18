import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./components1/Navbar1";
import News from "./components1/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar1 />

        <Route path="/">
          <News pageSize={5} country="in" categaory="general" />
        </Route>
        <Route path="/business">
          <News key="business" pageSize={5} country="in" categaory="business" />
        </Route>
        <Route path="/entertainment">
          <News
            key="entertainment"
            pageSize={5}
            country="in"
            categaory="entertainment"
          />
        </Route>
        <Route path="/general">
          <News key="general" pageSize={5} country="in" categaory="general" />
        </Route>
        <Route path="/health">
          <News key="health" pageSize={5} country="in" categaory="health" />
        </Route>
        <Route path="/science">
          <News key="science" pageSize={5} country="in" categaory="science" />
        </Route>
        <Route path="/sports">
          <News key="sports" pageSize={5} country="in" categaory="sports" />
        </Route>
        <Route path="/technology">
          <News
            key="technology"
            pageSize={5}
            country="in"
            categaory="technology"
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
