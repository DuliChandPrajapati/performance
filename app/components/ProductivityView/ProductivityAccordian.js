import React from 'react';

function ProductivityAccordian({dataAccordion}) {
  console.log("according ----", JSON.stringify(dataAccordion));
    const listData = JSON.stringify(dataAccordion);
    console.log("list data item", JSON.parse(listData));
    // console.log(listData.ssoId);

  const prodItems = [
    {
      id: 'Case Active Agents',
      value: 9,
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
  );
}

ProductivityAccordian.prototype = {};

export default ProductivityAccordian;
