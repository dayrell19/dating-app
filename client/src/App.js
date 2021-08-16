import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import pages
import RegisterPage from "./Pages/Register/Register";
import LoginPage from "./Pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
