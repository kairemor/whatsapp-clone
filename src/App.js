import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  // const [user, setUser] = useState(null)
  const [{ user },] = useStateValue()
  return (
    <div className="app">
      {
        !user ? (<Login />)
          : (
            <div className="app__body">
              <Router>
                <Sidebar />
                <Switch>
                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                </Switch>
              </Router>
            </div>
          )}
    </div>
  );
}

export default App;
