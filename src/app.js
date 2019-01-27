import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";

const App = () => (
    <div className="App">
        <NavBar/>

        <main role="main" className="flex-shrink-0">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about-me" exact component={About} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App