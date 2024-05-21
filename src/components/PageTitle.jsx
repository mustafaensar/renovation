/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, backgroundImage }) => {
  return (
    <div className="page-title" data-aos="fade" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container position-relative">
        <h1>{title}</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;