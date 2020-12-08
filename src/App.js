import React from 'react';
import './App.css';
import Navigation from './components/pages/navigation';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home';
import BecomeaTutor from './components/pages/becomeatutor';
import StudentSignUp from './components/pages/studentsignup';
import TutorLogIn from './components/pages/tutorlogin';
import StudentLogIn from './components/pages/studentlogin';





function App() {
  return (
   <BrowserRouter>
        <Navigation />
        
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/becomeatutor" component={BecomeaTutor}/>
          <Route exact path="/studentsignup" component={StudentSignUp}/>
          
          <Route exact path="/tutorlogin" component={TutorLogIn}/>
          <Route exact path="/studentlogin" component={StudentLogIn}/>
          
          
         
          
        </Switch>
        
    </BrowserRouter>
  )
}

export default App;

