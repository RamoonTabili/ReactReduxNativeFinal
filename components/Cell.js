import React, { Component } from 'react';
import CellItem from './CellItem';
import { Views, List, Spinner } from 'native-base';
import { connect } from "react-redux";
import * as actions from "./more/actions";

class Cell extends Component {
  render() {
      const cells = this.props.cellItem.map((item) => {
            return (
                <CellItem {...item} onPress={this.props.onChoicePress}/>
            )
      });
    return (
        <List>
            {cells}
            <Spinner animating={this.props.loading} color='blue'/>
        </List>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cellItem: state.restaurantList,
        loading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChoicePress: (e) => dispatch(actions.cellSelect(e.currentTarget))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);