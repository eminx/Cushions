import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import CushionsContainer from './CushionsContainer.jsx';
import 'semantic-ui-css/semantic.min.css';

Meteor.startup(() => {
  render(<CushionsContainer />, document.getElementById('theFrameOfEverything'));
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});
