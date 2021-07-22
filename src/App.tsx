import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import store from './store';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <Router>
      <div className={styles.root}>
        <Provider store={store}>
          <header>
            <Link to="/">Home</Link>
            <Link to={`chatroom/${10}`}>Chatroom Page</Link>
          </header>
          <Switch>
            <Route path="/chatroom/:id">
              <h1>Chatroom Page</h1>
            </Route>
            <Route path="/">
              <h1>Landing Page</h1>
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  );
};

export default App;
