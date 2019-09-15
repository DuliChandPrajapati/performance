/**
 *
 * ProductivityView
 *
 */

import React from 'react';

import { Helmet } from 'react-helmet';
import Table from 'components/Table';
import TeamTable from 'components/TeamTable';
import SelfAdm from 'containers/SelfAdm/Loadable';
import ProductivityAccordian from './ProductivityAccordian';
import StyledProductivity from './StyledProductivity';

function ProductivityView() {
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
              <ProductivityAccordian />
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

ProductivityView.propTypes = {};

export default ProductivityView;
