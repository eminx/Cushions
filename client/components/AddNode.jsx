import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const options = [
  { key: 'page', text: 'NEED', value: 'need' },
  { key: 'org', text: 'RESPONSIBILITY', value: 'resp' },
  { key: 'site', text: 'DEPENDENCY', value: 'depe' },
];

const AddNode = ({onNodeTextChange, onNodeTypeChange, node}) => (
  <Input
    action={<Dropdown onChange={onNodeTypeChange} button basic floating options={options} value={node.type} />}
    icon='genderless'
    iconPosition='left'
    placeholder='Add a Node'
    onChange={onNodeTextChange}
    value={node.text}
  />
);

export default AddNode;