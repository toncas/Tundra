import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfileHeader from './components/Feed/ProfileHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider>
        <ProfileHeader />
      </MuiThemeProvider>
    );
  }
}

export default App;
