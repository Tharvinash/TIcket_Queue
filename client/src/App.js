import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Customer from './components/layout/Customer';
import Manager from './components/layout/Manager';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { getCounter } from './actions/counter';

const App = () => {
  useEffect(() => {
    store.dispatch(getCounter());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <section className='container'>
            <Routes>
              <Route path='/' element={<Customer />} />
              <Route path='customer' element={<Customer />} />
              <Route path='manager' element={<Manager />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
