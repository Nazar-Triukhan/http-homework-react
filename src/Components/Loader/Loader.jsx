import { Component } from "react";
import { ClipLoader } from "react-spinners";

class Loader extends Component {
  render() {
    return (
      <ClipLoader
        color="red"
        size="50px"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
}

export default Loader;
