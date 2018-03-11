import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Feed from './components/Feed';
import ContactBar from './components/ContactBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider>
        <Feed/>
        <ContactBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
