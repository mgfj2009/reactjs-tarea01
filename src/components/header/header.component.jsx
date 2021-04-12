import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
	<div className="row">
		<div className="col-md-12">
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header page-scroll">
            <p className="navbar-brand">Homework</p>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="page-scroll">
                <Link to="/">Home</Link>
              </li>
              <li className="page-scroll">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
		</div>
  </div>
);

export default Header;
