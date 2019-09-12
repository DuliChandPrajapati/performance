import styled from 'styled-components';

const StyledHeader = styled.header`
  &&.app-header {
    background: #47567b;
    padding: 20px 0 30px 0;
  }

  .logo a {
    display: inline-block;
  }

  .logo img {
    max-width: 80px;
  }

  .logo {
    padding: 0 0 0 30px;
  }

  h2 {
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #c1c1c1;
    margin: 0;
  }

  h4 {
    font-size: 17px;
    line-height: 25px;
    text-align: center;
    color: #c1c1c1;
    margin: 0;
    font-weight: 400;
  }

  @media (max-width: 767px) {
    .logo {
      padding: 0 0 0 10px;
    }
    .logo img {
      max-width: 64px;
    }
    h2 {
      font-size: 16px;
      line-height: 20px;
    }
    h4 {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
export default StyledHeader;
