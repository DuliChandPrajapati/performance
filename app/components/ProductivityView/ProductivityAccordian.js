import React from 'react';

function ProductivityAccordian() {
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
  );
}

ProductivityAccordian.prototype = {};

export default ProductivityAccordian;
