import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import SideMenu from './components/SideMenu';
import Dashboard from "./pages/dashboard";
import Project from "./pages/project"
import Test from "./pages/testSuite"
import History from "./pages/history"


function App() {
  return (
    <>

      <div className='App'>

        <Router>

          <SideMenu />
          <Switch>
          <Route exact path="/" component={withRouter(Dashboard)}>
              {/* <Dashboard /> */}
            </Route>
            <Route exact path="/dashboard" component={withRouter(Dashboard)}>
              {/* <Dashboard /> */}
            </Route>
            <Route exact path="/project" component={withRouter(Project)}>
              {/* <Project /> */}
            </Route>
            <Route exact path="/test" component={withRouter(Test)}>
              {/* <Test /> */}
            </Route>
            <Route exact path="/history" component={withRouter(History)}>
              {/* <History /> */}
            </Route>
          </Switch>
        </Router>


      </div>

    </>
  );
}

export default App;
