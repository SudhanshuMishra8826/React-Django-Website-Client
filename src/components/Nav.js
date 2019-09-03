import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" onClick={() => props.display_form('login')}><a className="nav-link btn btn-primary">Login</a></li>

      <li className="nav-item" onClick={() => props.display_form('signup')}><a className="nav-link btn">Signup</a></li>
    </ul>
  );

  const logged_in_nav = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" onClick={props.handle_logout}><a className="nav-link btn btn-primary">LogOut</a></li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
handle_logout: PropTypes.func.isRequired
};