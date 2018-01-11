import React, { Component } from 'react';
import { Text, ListItem, Body, Right, Icon } from 'native-base';

class CellItem extends Component {
  render() {
    return (
        <ListItem button onPress={this.props.onPress}>
           <Body>
               <Text>{this.props.name} ({Number((this.props.distance/1000)).toFixed(2)} km)</Text>
           </Body>
           <Right>
               <Icon name="arrow-forward" />
           </Right>
        </ListItem>
    );
  }
}

export default CellItem;