import React from 'react';
import { Card, CardHeader, Avatar, CardTitle } from 'material-ui';
import { CardActions } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List'

import SocialBar from '../SocialBar';
import AvatarImage from '../../resources/Avatar.jpg';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandSidebar: false,
    };
    this.handleExpandSideBar = this.handleExpandSideBar.bind(this);
  }

  handleExpandSideBar() {
    this.setState({
      expandSidebar: !this.state.expandSidebar,
    });
  }

  render() {
    return (
      <div className="profile">
        <div className="profile-header">
          <Card>
            <CardHeader
              title={<h1>Antonio Castro</h1>}
              subtitle={<div><em>Software Engineer</em><SocialBar /></div>}
              avatar={<Avatar
                src={AvatarImage}
                size={200}
              />}
            />

            <CardActions style={{ width: '7%' }}>
              <List>
                <ListItem primaryText="Home" />
                <ListItem primaryText="About" />
                <ListItem primaryText="Resume" />
                <ListItem primaryText="Contact" />
                <ListItem primaryText="Guestbook" />
              </List>
            </CardActions>

          </Card>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
