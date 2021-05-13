import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
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
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
        </Body>
      </Router>
    </div>
  );
};

export default App;
