import { useEffect } from "react";
import { connect } from "react-redux";
import { getOneStream, updateStream } from "../../../actions";
import StreamForm from "../stream-form/StreamForm";
const StreamEdit = (props) => {
  const { id } = props.match.params;
  useEffect(() => {
    props.getOneStream(id);
  }, []);

  const handleFormSubmit = (formValue) => {
    props.updateStream(id, formValue);
  };

  return (
    <StreamForm
      title="스트림 수정하기"
      stream={props.stream}
      onSubmit={handleFormSubmit}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { getOneStream, updateStream })(
  StreamEdit
);
