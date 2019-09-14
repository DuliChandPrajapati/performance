/**
 *
 * SelfAdm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSelfAdm from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SelfAdm() {
  useInjectReducer({ key: 'selfAdm', reducer });
  useInjectSaga({ key: 'selfAdm', saga });

  return <div />;
}

SelfAdm.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
