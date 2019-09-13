/**
 *
 * HeaderLink
 *
 */

import React from 'react';
import productivityIcon from 'images/productivity-icon.png';
import salesIcon from 'images/sales-icon.png';
import StyledHeaderLink from './StyledHeaderLink';

const items = [
  {
    imageUrl: salesIcon,
    value: 'Sales',
    url: './sales',
  },
  {
    imageUrl: productivityIcon,
    value: 'Productivity',
    url: './productivity',
  },
];

const list = [];
items.forEach(function(item) {
  list.push(
    <li className="active" key={item.value}>
      <a href={item.url}>
        <span className="img">
          <img src={item.imageUrl} alt={item.value} />
        </span>{' '}
        <p>{item.value}</p>
      </a>
    </li>,
  );
});
function HeaderLink() {
  return (
    <StyledHeaderLink className="top-list">
      <div className="container-fluid">
        <ul className="header-links">{list}</ul>
      </div>
    </StyledHeaderLink>
  );
}

HeaderLink.propTypes = {};

export default HeaderLink;
