import { Meteor } from 'meteor/meteor';

Meteor.methods({
	addNode(node, userId) {
		if (Meteor.userId() === userId) {
			try {
				node.guide = Meteor.userId();
				Needs.insert(node);
			} catch(error) {
				return error;
			}
		}
	}
})