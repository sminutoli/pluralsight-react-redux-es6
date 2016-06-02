import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = ()=> <header>
  <nav>
    <IndexLink to="/" activeClassName="active">Home </IndexLink>
    <Link to="/about" activeClassName="active">Sobre nostro </Link>
    <Link to="/courses" activeClassName="active">Los cursito</Link>
  </nav>
</header>;

export default Header;