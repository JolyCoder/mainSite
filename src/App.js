import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderM from "./parts/head";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderM />
      </div>
    );
  }
}

export default connect(state => ({
  news: state.news,
  users: state.users
}))(App);

