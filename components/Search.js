import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { connect } from "react-redux";
import * as actions from "./more/actions";

class Search extends Component {
  render() {
    return (
        <Button full onPress={this.props.onSearchPress}>
            <Text>Search for food!</Text>
        </Button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchPress: () => dispatch(actions.getLocation())
    };
};
export default connect(null, mapDispatchToProps)(Search);