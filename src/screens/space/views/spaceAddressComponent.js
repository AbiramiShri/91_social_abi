import React, { Component } from "react";
import { getSpaceAddressList } from "../../space/services/spaceActions";
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
    getSpaceAddressList: params => {
      dispatch(getSpaceAddressList(params));
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
    spaceAddressList: state.spaceReducer.spaceAddressList
  };
};
class SpaceAddressComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Manufacturer", prop: "manufacturer" },
        { title: "Payload Type", prop: "payload_type" },
        { title: "Payload Kg", prop: "payload_mass_kg" }
      ]
    };
  }

  componentDidMount() {
    this.props.getSpaceAddressList();
  }
  render() {
    return (
      <div className="container box-shadow">
        <div >
          <h3>Space Address Component</h3>
        </div>
        <DataTable
          keys="name"
          columns={this.state.columns}
          initialData={this.props.spaceAddressList}
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
)(SpaceAddressComponent);
