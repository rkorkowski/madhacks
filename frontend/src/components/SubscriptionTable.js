import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-foundation";
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation.css'
import Colors from 'react-foundation/lib/enums';
import Foundation from 'react-foundation';
import infologo from '../info-logo.svg';
const SubscriptionTable = () => {
    return (
        <div>
            <a href="#" class="button success" onclick=>Add Subscription</a>
            <a href="/" class="button alert">Delete Subscription</a> &nbsp;
            <a href="/subscriptions" class="button">Subscriptions</a>
            <table className = "sub-table">
                <thead>
                  <tr>
                    <th width="200">Subscription</th>
                    <th>Cost / Month</th>
                    <th width="150">Last Time Used</th>
                  </tr>
                </thead>
                <tbody className = "sub-table-Body">
                  <tr>
                    <td>Spotify Premium</td>
                    <td>$5.99</td>
                    <td>August 3rd 2018 (99 days ago)</td>
                    <td><img src={infologo} className="more-info-logo" height="20" width="20" alt="info-logo" /></td>
                  </tr>
                  <tr>
                    <td>Youtube Premium</td>
                    <td>$8.99</td>
                    <td>November 9th 2018 (1 day ago)</td>
                    <td><img src={infologo} className="more-info-logo" height="20" width="20" alt="info-logo" /></td>
                  </tr>
                  <tr>
                    <td>Amazon Prime</td>
                    <td>$9.99</td>
                    <td>October 31st 2018 (10 days ago)</td>
                    <td><img src={infologo} className="more-info-logo" height="20" width="20" alt="info-logo" /></td>
                    </tr>
                </tbody>
              </table>
        </div>
    );
};

export default SubscriptionTable;
