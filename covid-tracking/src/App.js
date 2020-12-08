import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Global, Indonesia, Provinsi} from "./pages";
const App = () => {
    return (
        <Router>
          <h1>Covid Tracker</h1>

            <div>
                <nav>
                    <ul>
                        <li>

                            <Link to="/Global">Global</Link>
                        </li>
                        <li>
                            <Link to="/Indonesia">Indonesia</Link>
                        </li>
                        <li>
                            <Link to="/Provinsi">Provinsi</Link>
                        </li>
                    </ul>
                </nav>
            <Switch>
                <Route path="/global">
                    <Global/>
                </Route>
                <Route path="/indonesia">
                    <Indonesia/>
                </Route>
                <Route path="/provinsi">
                    <Provinsi/>
                </Route>
            </Switch>
            </div>
        </Router>
    );
};
export default App;