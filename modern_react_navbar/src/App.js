import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import Testimonial from './pages/Banklogin/Banklogin';
import Navbar from './Components/Navbar/Navbar';
import Banklogin from './pages/Banklogin/Banklogin';
import Menu from './pages/Menu';
import MenuContainer from './pages/Menu';
import Profile from './pages/Profile/Profile';
import Historyt from './pages/History/history';
import Balance from './pages/Balance/balance';
import Transaction from './pages/Transaction/transaction';

const App = () => {
  return (

     
     <Router>
       <Navbar/>
     <Switch>
    <Route path="/profile" exact  component={Profile}></Route>
    <Route path="/dashboard" exact  component={MenuContainer}/>
    <Route path="/profile" exact  component={Profile}/>
    <Route path="/history" exact  component={Historyt}/>
    <Route path="/balance" exact  component={Balance}/>
    <Route path="/transaction" exact  component={Transaction}/>

    




         <Route path="/about" exact>
       <About/>
        </Route>
         <Route path="/customerlogin" exact>
           <Login/>
         </Route>
         <Route path="/banklogin" exact>
           <Banklogin/>
         </Route>
         <Route path="/contact" exact>
           <Contact/>
      </Route>
         <Route path="/" exact>
           <Home/>
         </Route>
       </Switch>
   </Router>

  );
}

export default App;
