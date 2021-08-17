import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import pages
import RegisterPage from "./Pages/Register/Register";
import LoginPage from "./Pages/Login/Login";
import MainPage from "./Pages/Main/Main";
import ProfilePage from "./Pages/Profile/Profile";
import PreferencesPage from "./Pages/Preferences/Preferences";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/mainpage" exact component={MainPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/preferences" exact component={PreferencesPage} />
      </Switch>
    </Router>
  );
}

export default App;
