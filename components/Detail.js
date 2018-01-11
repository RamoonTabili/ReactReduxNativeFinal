import React, { Component } from 'react';
import { Text, ListItem, Body, Right, Icon } from 'native-base';

class Detail extends Component {
    static navigationOptions = () => ({
        title = "Test"
    });
  render() {
    return (
           <Body>
               <Text>Woo woo</Text>
           </Body>
    );
  }
}

export default Detail;