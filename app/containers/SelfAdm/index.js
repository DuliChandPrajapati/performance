/**
 *
 * SelfAdm
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Table from 'components/Table';
import ProductivityAccordian from 'components/ProductivityAccordian';
import makeSelectSelfAdm from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SelfAdm({ selfAdm }) {
  useInjectReducer({ key: 'selfAdm', reducer });
  useInjectSaga({ key: 'selfAdm', saga });

  useEffect(() => {
    if (!selfAdm.loading) {
      // const admData = selfAdm;
    }
  });
  console.log('self Data', selfAdm);
  // const dataforView = {};
  // const newAdmData = {};
  // setTimeout(() => {
  //   Object.assign(newAdmData, selfAdm);
  // }, 20000);
  // Object.keys(newAdmData).map(function(key) {
  //   if (key == 'respnse') {
  //     Object.asign(responseData, newAdmData[key]);
  //     Object.keys(responseData).map(function(payloadKey) {
  //       if (payloadKey == 'payload') {
  //         Object.asign(dataforView, responseData[payloadKey]);
  //       }
  //     });
  //   }
  // });

  return (
    <div>
      <ProductivityAccordian accordianData={selfAdm} />
      <Table tableData={selfAdm} />
    </div>
  );
}

SelfAdm.propTypes = {
  selfAdm: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  selfAdm: makeSelectSelfAdm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SelfAdm);
