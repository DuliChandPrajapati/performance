import React from 'react';
import { FormattedMessage } from 'react-intl';
import Logo from 'images/logo.png';
import { Row, Col } from 'reactstrap';
import Img from './Img';
import StyledHeader from './StyledHeader';
import messages from './messages';

function Header() {
  return (
    <StyledHeader className="app-header">
      <div className="container-fluid">
        <Row>
          <Col className="logo" xs="2">
            <a href="/">
              <Img src={Logo} alt="Max Life - Logo" />
            </a>
          </Col>
          <Col xs="8">
            <h2>
              <FormattedMessage {...messages.salutation} />{' '}
              <span>
                <FormattedMessage {...messages.userName} />
              </span>
              !
            </h2>
            <h4>
              <FormattedMessage {...messages.subHead} />
            </h4>
          </Col>
          <Col />
        </Row>
      </div>
    </StyledHeader>
  );
}

export default Header;
