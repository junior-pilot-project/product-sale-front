import Main from "pages/Main";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    );
  }
}

export default App;
