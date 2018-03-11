import React from 'react';
import { Card, CardHeader, Avatar, CardTitle } from 'material-ui';

import SocialBar from '../SocialBar';
import AvatarImage from '../../resources/Avatar.jpg';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandSidebar: false,
      blogs: [],
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

          </Card>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
