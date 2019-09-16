/**
 *
 * SelfAdm
 *
 */

import React, { memo, useState, useEffect } from 'react';
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
  const selfAdmSate = makeSelectSelfAdm() || {};

  useEffect(() => {
    const fetchData = () => {
      try {
        const result = selfAdmSate;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [selfAdmSate]);

  const dataforView = {};
  // selfAdm = JSON.parse(selfAdm);
  console.log('newAdmData', selfAdm.data);
  Object.keys(selfAdm.data).map(function(key, item) {
    console.log('newAdmData key', item);
    if (key == 'response') {
      Object.asign(responseData, selfAdm.data[key]);
      console.log('responseData', responseData);
      Object.keys(responseData).map(function(payloadKey) {
        if (payloadKey == 'payload') {
          Object.asign(dataforView, responseData[payloadKey]);
          console.log(`dataforView ${dataforView.ssoId}`);
        }
      });
    }
  });

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
