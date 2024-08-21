import Sample from "pages/Sample";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </div>
    );
  }
}

export default App;
