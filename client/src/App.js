// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import SingleUser from "./components/SingleUser";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <AllUsers />
          </Route>
          {/* -------------------------------- */}
          <Route path="/SingleUser/:id">
            <SingleUser />
          </Route>
          {/* ------------------------------------- */}
          <Route path="/AddUser" exact>
            <AddUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
