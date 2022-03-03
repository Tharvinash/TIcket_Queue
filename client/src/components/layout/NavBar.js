import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          Ticket Booking Queue
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/customer'>Customer</Link>
        </li>
        <li>
          <Link to='/manager'>Manager</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
