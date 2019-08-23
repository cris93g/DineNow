import React, { Component } from "react";
import { MDBSelect } from "mdbreact";

class SelectPage extends Component {
  state = {
    options: [
      {
        text: "Option 1",
        value: "1"
      },
      {
        text: "Option 2",
        value: "2"
      },
      {
        text: "Option 3",
        value: "3"
      }
    ]
  };

  render() {
    return (
      <div>
        <MDBSelect
          options={this.state.options}
          selected="Choose your option"
          label="Example label"
        />
      </div>
    );
  }
}

export default SelectPage;