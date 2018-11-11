import React , { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-foundation";
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation.css'
import Colors from 'react-foundation/lib/enums';
import Foundation from 'react-foundation';
import infologo from '../info-logo.svg';
import TableEntry from './TableEntry';
import './editdone.js';
class SubscriptionTable extends Component {
    render() {
    return (
        <div>
            <table className = "sub-table">
                <thead>
                  <tr>
                    <th width="200">Subscription</th>
                    <th>Cost / Month</th>
                    <th width="150">Last Time Used</th>
                  </tr>
                </thead>
                <tbody className = "sub-table-Body">
                  <TableEntry name = "Spotify" cost = "$6.99" date = "August 3rd 2018"/>
                </tbody>
              </table>
        </div>
    );
  }
}

export default SubscriptionTable;
