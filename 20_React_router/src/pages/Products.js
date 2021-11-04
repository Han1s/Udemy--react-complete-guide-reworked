import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Products(props) {
  return (
    <Fragment>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Products;