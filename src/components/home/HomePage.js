import React from 'react';
import {Link} from 'react-router';

const HomePage = ()=> <div>
  <h1>Esto es lo mas</h1>
  <p><Link to="about">Tocame chico</Link></p>
</div>;

export default HomePage;