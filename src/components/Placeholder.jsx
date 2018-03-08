import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Avatar from '../resources/Avatar.jpg'

const PlaceHolder = () => (
  <Card>
  <CardHeader
    title="Antonio Castro"
    subtitle="Software Engineer"
    avatar={Avatar}
  />
  <CardTitle title="Website under construction" subtitle="contact: toncas@windowslive" />
</Card>


);

export default PlaceHolder;