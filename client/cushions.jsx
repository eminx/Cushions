import { Meteor } from 'meteor/meteor';
import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

import NeedsList from './components/NeedsList';
import AssignNeedToResponsibility from './components/AssignNeedToResponsibility';
import AddNode from './components/AddNode';

import { Grid, Button, Container, Dropdown, Header, Input, List, Segment } from 'semantic-ui-react';

const emptyNode = {
  text: '',
  type: 'need'
}

class Cushions extends React.Component {

  state = {
    nodeToBeAdded: emptyNode,
    assignNeedToResponsibilityMode: false,
    assignDependencyMode: false
  }

  onNodeTextChange = (event, data) => {
    event.preventDefault();
    let node = this.state.nodeToBeAdded;
    node.text = data.value;
    this.setState({nodeToBeAdded: node});
  }

  onNodeTypeChange = (event, data) => {
    event.preventDefault();
    let node = this.state.nodeToBeAdded;
    node.type = data.value;
    this.setState({nodeToBeAdded: node});
  }

  onAddNodeClick = (event, data) => {
    event.preventDefault();
    const { nodeToBeAdded } = this.state;
    const self = this;
    switch(nodeToBeAdded.type) {
      case 'need':
        self.props.addNodeToDB(nodeToBeAdded);
        self.setState({nodeToBeAdded: emptyNode});
        break;
      case 'resp':
        this.setState({
          assignNeedToResponsibilityMode: true
        });
        break;
      case 'depe':
        this.setState({
          assignDependencyMode: true
        });
        break;
      default:
        break;
    }
  }

  onCloseModal = () => this.setState({assignNeedToResponsibilityMode: false, assignDependencyMode: false})
  
	render() {
		return (
			<div id="theArtistsFrame" >
          <Grid>
            <Grid.Column width={4} className={'leftBar aColumn'}>
              <div style={{display: 'flex', flexDirection: 'column'}} >
                <AddNode 
                  onNodeTextChange={this.onNodeTextChange}
                  onNodeTypeChange={this.onNodeTypeChange}
                  node={this.state.nodeToBeAdded}
                />
                <div style={{padding: '1em 0'}}>
                  <Button basic floated='right' color='purple' onClick={this.onAddNodeClick}>Add</Button>
                </div>
                <div>
                  <Header as='h2' color='purple'>
                    Needs:
                  </Header>
                  <NeedsList needs={this.props.needs}/>
                </div>
              </div>
            </Grid.Column>

            <Grid.Column width={8} className={'mainBar aColumn'}>
            <div className={'textAlign-center'}>
              <Header as='h1' color='pink'>
                The Big Picture:
              </Header>
              <Header as='h2' color='pink'>
                ¯\_(ツ)_/¯
              </Header>
            </div>
            </Grid.Column>
            <Grid.Column width={4} className={'rightBar aColumn'}>
              <Dropdown placeholder='Search user...' fluid search selection options={this.props.allMembers} />
              <Blaze template="loginButtons" />
            </Grid.Column>
          </Grid>

          <AssignNeedToResponsibility isOpen={this.state.assignNeedToResponsibilityMode} onClose={this.onCloseModal} />

			</div>
		)
	}
}

export default Cushions;

