import { Meteor } from 'meteor/meteor';

Meteor.publish('Needs', function() {
    const currentUserId = this.userId;
    if (currentUserId) {
			return Needs.find();    	
    }
});