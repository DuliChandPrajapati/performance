import React from 'react';
import StyledTable from 'components/Table/styledTable';
import StyledSales from './styledSales';

export function Sales() {
  return (
    <StyledSales className="salesTabs">
      <div className="container-fluid">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#applied"
              role="tab"
              data-toggle="tab"
            >
              Applied
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#paid" role="tab" data-toggle="tab">
              Paid
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane in active" id="applied">
            <StyledTable className="cstm-table cstm-pad">
              <div className="table-btns">
                <form className="cstm-frm" for= "sales form" aria-label="sales form">
                  <label className="form-group">
                    <select className="form-control" aria-label="select team">
                      <option>MTD</option>
                      <option>Option </option>
                      <option>Oprtion 2</option>
                    </select>
                  </label>
                </form>
              </div>
            </StyledTable>
            <StyledTable className="cstm-table cstm-pad">
              <table>
                <thead>
                  <tr>
                    <th colSpan="5">Applied</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Applied Cases</td>
                    <td>Adj. MFYP</td>
                    <td>Weighted IFYP</td>
                    <td>Applied Growth Cases</td>
                    <td>Growth Adj. MFYP</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>180</td>
                    <td>8</td>
                    <td>40</td>
                    <td>180</td>
                  </tr>
                </tbody>
              </table>
            </StyledTable>
          </div>
          <div role="tabpanel" className="tab-pane" id="paid">
            <StyledTable className="cstm-table cstm-pad">
              <div className="table-btns">
                Self View
                <form className="cstm-frm">
                  <div className="form-group">
                    <label>Time</label>
                    <select className="form-control">
                      <option>MTD</option>
                      <option>Option </option>
                      <option>Oprtion 2</option>
                    </select>
                  </div>
                </form>
              </div>
            </StyledTable>
            <div className="paid-sec">
              <StyledTable className="cstm-table">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="3">Paid Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Actual</td>
                      <td>Ach% </td>
                      <td>Growth</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>79%</td>
                      <td>9%</td>
                    </tr>
                  </tbody>
                </table>
              </StyledTable>

              <StyledTable className="cstm-table">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="3">Paid Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Actual</td>
                      <td>Ach% </td>
                      <td>Growth</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>79%</td>
                      <td>9%</td>
                    </tr>
                  </tbody>
                </table>
              </StyledTable>

              <StyledTable className="cstm-table">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="3">Paid Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Actual</td>
                      <td>Ach% </td>
                      <td>Growth</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>79%</td>
                      <td>9%</td>
                    </tr>
                  </tbody>
                </table>
              </StyledTable>
            </div>
          </div>
        </div>
      </div>
    </StyledSales>
  );
}

export default Sales;
