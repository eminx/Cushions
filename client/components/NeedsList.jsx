import { Meteor } from 'meteor/meteor';
import React from 'react';
import { List } from 'semantic-ui-react';

const NeedsList = (props) => (
  <List selection divided verticalAlign='middle'>
    {props.needs.map((need) => (
      <List.Item>
        <List.Content>
          <List.Header>
            {need.text}
          </List.Header>
            <List.Item>guide: <b>{need.guide}</b></List.Item>
            <List.Item>facilitator: unassigned</List.Item>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

export default NeedsList;