import React from 'react';
import StyledTable from './styledTable';

function Table() {
  return (
    <StyledTable className="cstm-table">
      <div className="container-fluid">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>#ADM</th>
              <th>ADM Productivity</th>
              <th>ADM Le Then 1 G</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>New ADM(M0-m6)</td>
              <td>5</td>
              <td>16000</td>
              <td>2</td>
            </tr>
            <tr>
              <td>New ADM(M0-m12)</td>
              <td>10</td>
              <td>17000</td>
              <td>5</td>
            </tr>
            <tr>
              <td>All ADMs</td>
              <td>15</td>
              <td>155000</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledTable>
  );
}

export default Table;
