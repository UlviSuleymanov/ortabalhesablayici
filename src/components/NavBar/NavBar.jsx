import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      Fennlerin sayini seciniz
      <button>
        <NavLink to="/">3</NavLink>
      </button>
      <button>
        <NavLink to="/four">4</NavLink>
      </button>
      <button>
        <NavLink to="/five">5</NavLink>
      </button>
      <button>
        <NavLink to="/six">6</NavLink>
      </button>
      <button>
        <NavLink to="/seven">7</NavLink>
      </button>
      <button>
        <NavLink to="/eight">8</NavLink>
      </button>
    </div>
  );
};

export default NavBar;
