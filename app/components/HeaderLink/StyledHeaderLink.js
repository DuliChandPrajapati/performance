import styled from 'styled-components';

const StyledHeaderLink = styled.div`
  &&.top-list {
    background: #47567b;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  }

  ul.header-links li {
    display: inline-block;
    padding: 0 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #fff;
  }

  ul.header-links li img {
    display: inline-block;
    margin: 0 0 8px;
    max-width: 30px;
  }

  ul.header-links li.active span.img {
    background: #e99663;
    display: inline-block;
    height: 45px;
    width: 45px;
    line-height: 40px;
    border-radius: 50%;
    margin: 0 0 5px;
  }

  ul.header-links li.active img {
    max-width: 25px;
    margin: 0;
  }

  ul.header-links li p:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(
      to right top,
      #ffa571,
      #f8945b,
      #f18546,
      #ec7936
    );
    width: 100%;
    height: 4px;
    border-radius: 2px;
  }

  ul.header-links li p {
    position: relative;
    margin: 0;
    padding: 0 0 10px;
  }

  ul.header-links li a {
    color: #fff;
    text-decoration: none;
  }
  ul.header-links li a:hover {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 767px) {
     {
      margin-top: -1px;
    }

    ul.header-links li {
      padding: 0 10px;
    }

    ul.header-links li.active span.img {
      height: 40px;
      width: 40px;
      line-height: 36px;
      margin: 0 0 5px;
    }

    ul.header-links li.active img {
      max-width: 20px;
    }

    ul.header-links li p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
export default StyledHeaderLink;
