import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const AssignNeedToResponsibility = ({ isOpen, onClose, onConfirm }) => (
  <Modal size={'small'} open={isOpen} onClose={onClose}>
    <Modal.Header>
      Select a Need to Assign Responsibility to
    </Modal.Header>
    <Modal.Content>

    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={onClose}>
        Skip
      </Button>
      <Button positive onClick={onConfirm} >Assign </Button>
    </Modal.Actions>
  </Modal>
);

export default AssignNeedToResponsibility;