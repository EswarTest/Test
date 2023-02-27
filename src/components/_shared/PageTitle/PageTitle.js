import React from "react";
import PropTypes from "prop-types";
import "./PageTitle.css";

// import "./PageTitle.css";

const PageTitle = ({ children }) => (
  <div id="pageTitle" className="pageTitle">
    {children}
  </div>
);

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
