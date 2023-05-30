import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ filterTasks }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/add-task">Add Task</Link>
        </li>
        {/* <li>
          <Link to="/all">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li> */}

      </ul>
      
    </nav>
  );
};

export default Navbar;
