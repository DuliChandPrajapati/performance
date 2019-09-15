/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SelfAdm from 'containers/SelfAdm/Loadable';
// import ProductivityView from 'components/ProductivityView';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HeaderLink from 'components/HeaderLink';
import Sales from 'components/Sales';

import GlobalStyle from '../../global-styles';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/tab';

const AppWrapper = styled.div`
  max-width: calc(1440px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Max Life Agent View"
        defaultTitle="Max Life Agent View"
      >
        <meta name="description" content="A Max Life Agent View" />
      </Helmet>
      <Header />
      <HeaderLink />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/productivity" component={SelfAdm} />
        <Route path="/sales" component={Sales} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
