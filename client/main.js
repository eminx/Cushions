import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Cushions from './cushions.jsx';

Meteor.startup(() => {
  render(<Cushions />, document.getElementById('app'));
});