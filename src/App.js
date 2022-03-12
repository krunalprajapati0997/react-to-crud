import AllUser from './Component/AllUser';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import CodeForinterview from './Component/CodeForinterview';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import api from './Service/api'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CodeForinterview} />
        <Route exact path="/all" component={AllUser} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
        {/* <api /> */}
      </Switch>
    </Router>
  );
}

export default App;