import { Meteor } from 'meteor/meteor';

Meteor.methods({
	addNode(node, userId) {
		if (Meteor.userId() === userId) {
			try {
				node.guide = Meteor.userId();
				Needs.insert(node);
				console.log(node, 'success');
			} catch(error) {
				console.log(node, 'error');
				return error;
			}
		}
	}
})