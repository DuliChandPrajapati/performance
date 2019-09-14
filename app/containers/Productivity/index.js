/**
 *
 * Productivity
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Table from 'components/Table';
import TeamTable from 'components/TeamTable';
import SelfAdm from 'containers/SelfAdm/Loadable';
import makeSelectProductivity from './selectors';
import reducer from './reducer';
import saga from './saga';
import StyledProductivity from './StyledProductivity';

export function Productivity() {
  useInjectReducer({ key: 'productivity', reducer });
  useInjectSaga({ key: 'productivity', saga });

  const prodItems = [
    {
      id: 'Case Active Agents',
      value: 15,
    },
    {
      id: 'Active Case Rate',
      value: 1.7,
    },
    {
      id: 'Case Size',
      value: 45000,
    },
    {
      id: '#ADM',
      value: 10,
    },
    {
      id: 'ADM Productivity',
      value: 170000,
    },
    {
      id: '#QR',
      value: 5,
    },
    {
      id: '#ESS',
      value: 5,
    },
    {
      id: 'YTD Proactive',
      value: 4,
    },
  ];

  const prodItemsList = [];
  prodItems.forEach(function(item) {
    prodItemsList.push(
      <li key={item.id}>
        <div>
          <div className="label">{item.id}</div>
          <p>{item.value}</p>
        </div>
      </li>,
    );
  });
  return (
    <StyledProductivity>
      <Helmet>
        <title>Productivity</title>
        <meta name="description" content="Description of Productivity" />
      </Helmet>
      <div className="prod-section">
        <div className="container-fluid">
          <div id="accordion" className="cstm-accrdion">
            <div className="card">
              <div className="card-header" id="heading-2">
                <h5 className="mb-0">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    Productivity
                  </a>
                </h5>
              </div>
              <div
                id="collapse-2"
                className="collapse"
                data-parent="#accordion"
                aria-labelledby="heading-2"
              >
                <div className="card-body">
                  <ul className="prod-list">{prodItemsList}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table />
      <TeamTable />
      <SelfAdm />
    </StyledProductivity>
  );
}

Productivity.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productivity: makeSelectProductivity(),
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
)(Productivity);
