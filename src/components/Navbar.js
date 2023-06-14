import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="menu">
    <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/todos">Todos</NavLink></li>
    </ul>
  </div>
);
export default Navbar;
