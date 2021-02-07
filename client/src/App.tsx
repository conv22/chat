import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/' component={ChatPage} />
      </Switch>
    </Router>
  );
};
export default App;
