import React, { Component } from "react";
import DeleteIcon from '../delete-icon.png';
class TableEntry extends Component {
render() {
  var givenid = parseInt(this.props.id);
      return (
        <tr id = {givenid}>
          <td>{this.props.name}</td>
          <td>{this.props.cost}</td>
          <td>{this.props.date}</td>
          <td><img src={DeleteIcon} className = "delete-icon" alt="delete icon" width = "35" onClick={
            function(){
            var confirmDeletion = window.confirm("Are you sure you want to delete this Subscription?");
               if( confirmDeletion ){
                  document.getElementById(givenid).parentNode.deleteRow(givenid-1);
                  return true;
                  //remove from subscriptionbox and remove from backend db
               }
            }
          }/>
          </td>
        </tr>
      );
    }
}
export default TableEntry;
