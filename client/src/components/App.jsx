import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/stream-list/StreamList";
import StreamShow from "./streams/stream-show/StreamShow";
import StreamCreate from "./streams/stream-create/StreamCreate";
import StreamDelete from "./streams/stream-delete/StreamDelete";
import StreamEdit from "./streams/stream-edit/StreamEdit";
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Body>
          <Route exact path="/" component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
        </Body>
      </Router>
    </div>
  );
};

export default App;
