import { Meteor } from 'meteor/meteor';
import React from 'react';
import Cushions from './Cushions';

class CushionsContainer extends React.Component {
	state = {
    needs: [],
    allMembers: [],
    activeMembers: []
	}

  componentDidMount() {
    this.getNeedsFromDB();
    this.getUsersFromDB();
  }

  getNeedsFromDB() {
    const self = this;
    setTimeout(function() {
      const needs = Needs.find().fetch();
      self.setState({needs: needs.reverse()});
    }, 1000);
  }

  getUsersFromDB() {
    const self = this;
    setTimeout(function() {
      const users = Meteor.users.find().fetch();
      const members = self.compileUsers(users);
      self.setState({allMembers: members});
    }, 1000);
  }

  compileUsers = (usersList) => {
    let allMembers = []  // We need to limit this to a certain amount when we have bunch of members;
     for (let member of usersList) {
       allMembers.push({
         key: member._id,
         value: member.username,
         text: member.username  // better member.profile.fullname or something...
       });
     }
     return allMembers;
  }

  onAddNodeToDB = (node) => {
    const self = this;
    Meteor.call('addNode', node, Meteor.userId(), function(error,respond) {
      if (error) {
        return false;
      } else {
        self.getNeedsFromDB();
      }
    });
  }

  render() {
    const { allMembers, activeMembers, needs } = this.state;
  	return (
      <Cushions
        allMembers={allMembers} // make a limit
        activeMembers={activeMembers}
        addNodeToDB={this.onAddNodeToDB}
        needs={needs}
      />
  	)
  }
}

export default CushionsContainer;