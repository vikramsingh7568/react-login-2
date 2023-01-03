import './App.css';
import React from 'react'
import Homepage from './routes/Homepage';
import Login from './routes/Login';
import Register from './routes/Register';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";

function App() {
  return (
   <div className="App">
    <Router>
   <Switch>
   
    <Route path="/login"><Login /></Route>
    <Route path="/"> <Homepage/></Route> 
    <Route path="/register"><Register/></Route>    
   </Switch>
   </Router>
    </div>
  );
}
export default App;