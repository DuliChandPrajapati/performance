/**
 *
 * SelfAdm
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ProductivityView from 'components/ProductivityView';
import makeSelectSelfAdm from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestAdmData, fetchAdmData } from './actions';

export function SelfAdm({ selfAdm }) {
  useInjectReducer({ key: 'selfAdm', reducer });
  useInjectSaga({ key: 'selfAdm', saga });
  // const data = selfAdm;
  // useEffect(() =>{
  //   if(!data.loading){
  //     const admData = data;
  //   }
  // });

  return <ProductivityView admData={selfAdm} />;
}

SelfAdm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selfAdm: makeSelectSelfAdm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ requestAdmData, fetchAdmData }, dispatch),
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
