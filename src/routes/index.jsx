import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";


function Routes() {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/projetos" component={Projects} />
            <Route exact path="/certificados" component={Certificates} />
            <Route exact path="/contato" component={Contact} />
        </Switch>
    )
}

export default Routes;




