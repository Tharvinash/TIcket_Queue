import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Customer from './components/layout/Customer';
import Manager from './components/layout/Manager';
import './App.css';

const App = () => (
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
);

export default App;
