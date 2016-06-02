import React, {PropTypes} from 'react';

const App = ({children})=> <section>
  <h1>Mi super header</h1>
  {children}
</section>;

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;