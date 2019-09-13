import styled from 'styled-components';

const StyledSales = styled.div`
  &&.salesTabs {
    padding: 20px 0;
  }

  .nav-tabs {
    border-bottom: 3px solid #f2f2f2;
  }

  .nav-tabs .nav-item {
    width: 50%;
    text-align: center;
  }

  .nav-tabs .nav-link {
    color: #b4b4b4;
    font-weight: normal;
    font-size: 19px;
    position: relative;
    border: none;
  }

  .nav-tabs .nav-link:after {
    content: '';
    display: none;
    position: absolute;
    background: #eb7b38;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 3px;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #eb7b38;
    background: none;
  }

  .nav-tabs .nav-link.active:after {
    display: block;
  }

  .paid-sec {
    overflow: auto;
    display: flex;
  }

  .paid-sec .cstm-table {
    margin: 0 15px 0 0;
    overflow: visible;
    min-width: 400px;
    display: inline-flex;
  }

  .table-btns {
    position: relative;
    padding: 10px 0;
    min-height: 50px;
  }

  .table-btns .cstm-frm {
    position: absolute;
    right: 0;
    bottom: 10px;
  }

  .table-btns .cstm-frm select.form-control {
    background-color: #ec7936;
    background: url('../../images/cal-icon.png') no-repeat 15px 12px,
      url('../../images/arrow.png') no-repeat 86% 17px #ec7936;
    border: none;
    color: #fff;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    cursor: pointer;
    outline: none !important;
    padding: 8px 20px 8px 40px;
  }

  .cstm-frm .form-group {
    margin-bottom: 0;
    display: table;
  }

  .cstm-frm label {
    padding-right: 15px;
  }

  .cstm-frm select.form-control,
  .cstm-frm label {
    display: table-cell;
  }

  .cstm-table.cstm-pad {
    padding: 15px 0 0;
  }

  @media (max-width: 767px) {
    .paid-sec .cstm-table {
      min-width: auto;
    }
    .paid-sec .cstm-table table {
      min-width: auto;
    }
  }
`;

export default StyledSales;
