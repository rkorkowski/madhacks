import React, { Component } from "react";

class TableEntry extends Component {
  render() {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.cost}</td>
          <td>{this.props.date}</td>
        </tr>
      );
    }
}
export default TableEntry;
