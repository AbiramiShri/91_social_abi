import React, { Component } from "react";
import { getSpaceHistoryList } from "../../space/services/spaceActions";
import { connect } from "react-redux";
import { DataTable } from "react-data-components";
import "react-data-components/css/table-twbs.css";
/**
 * To dispatch all methods to child component
 * @param {*} dispatch
 * @param {*} ownProps
 */
const mapDispatchToProps = dispatch => {
  return {
    getSpaceHistoryList: params => {
      dispatch(getSpaceHistoryList(params));
    }
  };
};

/**
 * To get state varialble and pass it to child component
 * @param {*} state
 * @param {*} ownProps
 */
const mapStateToProps = state => {
  return {
    spaceHistoryList: state.spaceReducer.spaceHistoryList
  };
};

class SpaceHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Title", prop: "title" },
        { title: "Flight no", prop: "flight_number" },
        { title: "Details", prop: "details" }
      ]
    };
  }
  componentDidMount() {
    this.props.getSpaceHistoryList();
  }

  render() {
    return (
      <div className="container box-shadow">
        <h3>SpaceHistoryComponent</h3>
        <DataTable
          keys="name"
          columns={this.state.columns}
          initialData={this.props.spaceHistoryList}
          initialPageLength={5}
        />
      </div>
    );
  }
}

/**
 * To connect all state and actions to container
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpaceHistoryComponent);
