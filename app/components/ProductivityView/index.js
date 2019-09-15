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
  // let dataforView, newAdmData;
  console.log("admin -> ", admData);
  // if (admData.loading == false) {
    // console.log(`admData --- - - ${JSON.stringify(admData)}`);
      const data = JSON.stringify(admData);
      const dataforView = JSON.parse(data);
    // newAdmData = {};
    // Object.assign(newAdmData, admData);
    // Object.keys(newAdmData).map(function (key) {
    //   if (key == "response") {
    //     console.log(`admData --- - - 0`);
    //     Object.asign(responseData, admData[key]);
    //     Object.keys(responseData).map(function (payloadKey) {
    //       if (payloadKey == "payload") {
    //     console.log(`admData --- - - 1 `);

    //         Object.asign(dataforView, responseData[payloadKey]);
    //       }
    //     });
    //     console.log("dataforView --- >", dataforView);
    //     return dataforView;
    //   }
    // });
  // }
  return (
    <StyledProductivity>
      <Helmet>
        <title>Productivity</title>
        <meta name="description" content="Description of Productivity" />
      </Helmet>
      <ProductivityAccordian dataAccordion={dataforView} />
      <Table />
      <TeamTable />
    </StyledProductivity>
  );
}

ProductivityView.propTypes = {
  admData: PropTypes.object,
};

export default ProductivityView;
