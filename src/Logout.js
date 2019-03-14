import * as actionCreators from "./store/actions";

import React from "react";
import { connect } from "react-redux";

const Logout = props => {
  return (
    <button className="btn btn-danger" onClick={props.logout}>
      Logout {props.user.username}
    </button>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};
const mapStateToProps = state => ({
  user: state.rootAuth.user
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
