import React,{useState,useEffect} from "react";
import Login from "./Login/Login";
import TapNews from "./TapNews/TapNews";
import {BrowserRouter as Router, Route,Switch, Link} from "react-router-dom";


function App() {
  const [id, setId] = useState(null);
  const handleLogin =(value)=>
  {
    setId(value);
  };
  return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login onlogin={(value)=>handleLogin(value)} />} ></Route>
          <Route exact path="/TapNews" render={() => <TapNews currentId={id} />}></Route>
        </Switch>
      </Router>
  );
}

export default App;
