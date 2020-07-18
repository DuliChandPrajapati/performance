import styled from 'styled-components';

const StyledProductivity = styled.div`
  .prod-section {
    padding: 20px 0;
  }

  .cstm-accrdion .mb-0 > a {
    display: block;
    position: relative;
  }

  .cstm-accrdion .mb-0 > a:after {
    content: '+';
    position: absolute;
    right: 0;
    color: #000;
    background: #f2f2f2;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    bottom: 0;
  }

  .cstm-accrdion .mb-0 > a[aria-expanded='true']:after {
    content: '-';
    font-size: 28px;
  }

  .prod-section {
    margin: 20px 0 0;
  }

  .cstm-accrdion .card-header {
    background: #e4e4e4;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -ms-border-radius: 5px 5px 0 0;
    border: none;
  }

  .cstm-accrdion .card-header a {
    color: #373737;
    text-decoration: none;
    font-size: 19px;
    line-height: 22px;
  }

  .cstm-accrdion .card {
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 13px -1px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 4px 13px -1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 4px 13px -1px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0px 4px 13px -1px rgba(0, 0, 0, 0.2);
  }

  .prod-list li {
    display: inline-block;
    padding: 15px 20px;
    text-align: center;
    width: 20%;
  }

  .prod-list li > div {
    text-align: center;
    margin: 0 auto;
  }

  .prod-list li div .label {
    color: #737373;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    margin: 0 0 5px;
  }

  .prod-list li > div p {
    font-size: 20px;
    line-height: 33px;
    color: #373737;
    font-weight: 500;
    margin: 0;
  }

  @media (max-width: 767px) {
    .prod-list li div .label {
      font-size: 15px;
      line-height: 20px;
    }

    .prod-list li {
      padding: 15px 10px;
      width: 33%;
    }

    .cstm-accrdion .card-header a {
      font-size: 17px;
    }

    .prod-list li {
      padding: 10px;
      width: 50%;
    }

    .prod-list li > div p {
      font-size: 16px;
      line-height: 22px;
    }
  }

  @media (max-width: 479px) {
    .prod-section .card-body {
      padding: 10px 5px;
    }

    .prod-list li div .label {
      font-size: 12px;
      line-height: 15px;
    }

    .cstm-accrdion .card-header a {
      font-size: 15px;
    }

    .prod-list li {
      padding: 15px 5px;
      width: 32%;
    }

    .prod-list li > div p {
      font-size: 13px;
      line-height: 15px;
    }
  }
`;
export default StyledProductivity;
