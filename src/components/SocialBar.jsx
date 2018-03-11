import React from 'react';
import IconButton from 'material-ui/IconButton';

const ContactBar = () => (
  <div>
    <IconButton
      iconClassName="fa fa-github"
      tooltip="github"
      tooltipPosition="bottom-center"
      href="https://github.com/toncas"
      target="_blank"
    />
    <IconButton
      iconClassName="fa fa-instagram"
      tooltip="instagram"
      tooltipPosition="bottom-center"
      href="https://www.instagram.com/toncas/"
      target="_blank"
    />
    <IconButton
      iconClassName="fa fa-twitter"
      tooltip="twitter"
      tooltipPosition="bottom-center"
      href="https://www.twitter.com/antoniostreams"
      target="_blank"
    />
    <IconButton
      iconClassName="fa fa-linkedin"
      tooltip="LinkedIn"
      tooltipPosition="bottom-center"
      href="https://www.linkedin.com/in/theantoniocastro/"
      target="_blank"
    />
    <IconButton
      iconClassName="fa fa-twitch"
      tooltip="twitch"
      tooltipPosition="bottom-center"
      href="https://www.twitch.tv/toncas"
      target="_blank"
    />
  </div>
);
export default ContactBar;
