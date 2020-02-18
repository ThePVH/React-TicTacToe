import React, { useState } from 'react';
import { AppBar, Toolbar, ButtonGroup, Button, Typography } from '@material-ui/core'
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { Login } from './components/Login'
import { About } from './components/About'
import { Home } from './components/Home'
import { Users } from './components/Users'
import { Notfound } from './components/NotFound'

export const admin = "admin@admin.cz";
export const adminPassword = "123";

const useStyles = makeStyles({
  root: {
    color: 'white',
  },
});

function App() {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authorizeUser = (username, password) => {
    const isAuthorized = username === admin && password === adminPassword;

    setIsLoggedIn(isAuthorized);

    return isAuthorized;
  }

  return (
    <div className="App">
      <Router>
        <AppBar color="primary" position="static" variant="outlined">
          <Toolbar>
            {isLoggedIn && <div>
              <ButtonGroup color="primary" size="small" aria-label="small contained button group">
                <Button className={classes.root} to="/" component={Link}>
                  <Typography variant="button">
                    Home
                  </Typography>
                </Button>
                <Button className={classes.root} to="/about/" component={Link}>
                  <Typography variant="button">
                    About
                  </Typography>
                </Button>
                <Button className={classes.root} to="/users/" component={Link}>
                  <Typography variant="button">
                    Users
                  </Typography>
                </Button>
                <Button className={classes.root} onClick={() => setIsLoggedIn(false)}>
                  <Typography variant="button">
                    Logout
                  </Typography>
                </Button>
              </ButtonGroup>
            </div>}
          </Toolbar>
        </AppBar>

        <Redirect to={isLoggedIn ? "/" : "/login"} />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login/" render={() => <Login authorizeUser={authorizeUser} />} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Router component={Notfound} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
