import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <p>Hello world</p>
        </Layout>
      </Aux>
    );
  }
}

export default App;
