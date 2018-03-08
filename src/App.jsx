import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlaceHolder from './components/Placeholder.jsx';
import ContactBar from './components/ContactBar.jsx';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <PlaceHolder />
        <ContactBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
