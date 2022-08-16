import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Users from './Users';
import { getToken, onMessageListener } from './firebase';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  // React.useEffect(() => {
  //   const msg = firebase.messaging();
  //   msg.requestPermission().then(() => {
  //     return msg.getToken();
  //   }).then((data) => {
  //     console.warn("token", data)
  //   })
  // })
  const [isTokenFound, setTokenFound] = useState(false);
  getToken(setTokenFound);
  // getToken();

  const [show, setShow] = useState(false);

  onMessageListener()
    .then((message) => {
      setShow(true);
    })
    .catch((err) => console.log('failed: ', err));
  return (
    <div className='App'>
      <Router>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/about'>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/users'>Users</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/users' component={Users}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
