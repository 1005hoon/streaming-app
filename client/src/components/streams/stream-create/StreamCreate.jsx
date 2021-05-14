import { connect } from "react-redux";
import { createStream } from "../../../actions";

import StreamForm from "../stream-form/StreamForm";

const StreamCreate = (props) => {
  const handleSubmit = (formData) => {
    props.createStream(formData);
  };
  return <StreamForm title="스트림 생성하기" onSubmit={handleSubmit} />;
};

export default connect(null, {
  createStream,
})(StreamCreate);
