import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cricket from './component/Cricket/Cricket';
import Adduser from './component/Cricket/Adduser';
import EditUser from './component/Cricket/EditUser';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path="/" component={Cricket} />
              <Route exact path="/add-user" component={Adduser}/> 
              <Route exact path="/edit-user/:id" component={EditUser}/>   
          </Switch>
        </Router>
    </div>
  );
}

export default App;
