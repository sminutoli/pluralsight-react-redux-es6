import React, { PropTypes } from 'react';
import { Header } from './index';

const App = ({children})=> <section>
  <Header />
  {children}
</section>;

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;