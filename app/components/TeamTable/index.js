import React from 'react';
import StyledTeamTable from './styledTeamTable';
import StyledTable from '../Table/styledTable';

function TeamTable() {
  return (
    <StyledTeamTable className="cstm-table team-sec">
      <div className="container-fluid">
        <div className="table-btns">
          Team View
          <button type="button" className="active">
            AP/P
          </button>
          <button type="button">ADM</button>
          <button type="button">Agent</button>
        </div>
        <StyledTable className="cstm-table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>ADM Productivity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>420152 </td>
                <td>Kaushal Patel </td>
                <td>Senior Partner</td>
                <td>15</td>
              </tr>
              <tr>
                <td>471685</td>
                <td>Jignesh Shah </td>
                <td>Associate Partner</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </StyledTable>
      </div>
    </StyledTeamTable>
  );
}

export default TeamTable;
