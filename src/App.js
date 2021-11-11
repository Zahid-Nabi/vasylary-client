import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AllProducts from './pages/Products/AllProducts';
import Order from './pages/Order/Order/Order';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/allProducts'>
          <AllProducts></AllProducts>
        </Route>
        <Route exact path='/orders'>
          <Order></Order>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/register'>
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
