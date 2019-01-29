import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Details from "./pages/Details";

const App = () => (
    <div className="App">
        <NavBar/>

        <main role="main" className="flex-shrink-0">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/post/:id" component={Details} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/about-me" exact component={About} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </div>
);

export default App