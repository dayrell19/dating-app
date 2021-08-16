import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import pages
import RegisterPage from "./Pages/Register/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
