/**
 *
 * ProductivityView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Table from 'components/Table';
import TeamTable from 'components/TeamTable';
import ProductivityAccordian from './ProductivityAccordian';
import StyledProductivity from './StyledProductivity';

function ProductivityView({ admData }) {
  console.log(`admData ${JSON.stringify(admData)}`);
  return (
    <StyledProductivity>
      <Helmet>
        <title>Productivity</title>
        <meta name="description" content="Description of Productivity" />
      </Helmet>
      <ProductivityAccordian />
      <Table />
      <TeamTable />
    </StyledProductivity>
  );
}

ProductivityView.propTypes = {
  admData: PropTypes.object,
};

export default ProductivityView;
