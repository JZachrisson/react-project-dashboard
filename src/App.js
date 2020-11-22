import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
