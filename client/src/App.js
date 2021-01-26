// import logo from './logo.svg';
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import SingleUser from "./components/SingleUser";
import Header from "./components/Header";
import Posts from "./components/Posts";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginUser from "./components/LoginUser";

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
          {/* ------------------------------------------- */}
          <Route path="/posts">
            <Posts />
          </Route>
          {/* ----------------------------------------------- */}
          <Route path="/login">
            <LoginUser />
          </Route>
          {/* ----------------------------------------------- */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
