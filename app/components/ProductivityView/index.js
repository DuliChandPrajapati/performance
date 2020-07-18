/**
 *
 * ProductivityView
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SelfAdm from 'containers/SelfAdm/Loadable';
import TeamTable from 'components/TeamTable';
import StyledProductivity from './StyledProductivity';

function ProductivityView() {
  return (
    <StyledProductivity>
      <Helmet>
        <title>Productivity</title>
        <meta name="description" content="Description of Productivity" />
      </Helmet>
      <SelfAdm />
      <TeamTable />
    </StyledProductivity>
  );
}

ProductivityView.propTypes = {};

export default ProductivityView;
