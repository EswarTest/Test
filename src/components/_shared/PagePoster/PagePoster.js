import React from "react";
import PropTypes from "prop-types";
import "./PagePoster.css";

// import './PageTitle.css';

const PagePoster = ({ src, alt, width = "200px" }) => (
  <img
    id="pagePoster"
    className="pagePoster"
    src={src}
    alt={alt}
    width={width}
  />
);

PagePoster.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
};

export default PagePoster;
