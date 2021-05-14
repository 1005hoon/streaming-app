import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOneStream } from "../../../actions";

const StreamEdit = (props) => {
  const { id } = props.match.params;
  useEffect(() => {
    props.getOneStream(id);
  }, []);

  return (
    <>
      {!props.stream && <h1>Loading Stream Data</h1>}
      <h1>Edit Stream</h1>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { getOneStream })(StreamEdit);
