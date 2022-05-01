import React from "react";
import PropTypes from "prop-types";

const App = ({ message = "Hi there👋" }) => {
  return <div>App{message}</div>;
};

App.prototype = {
  message: PropTypes.string,
};
export default App;
