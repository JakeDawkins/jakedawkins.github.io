import React from "react";
import MenuWithSearch from "../MenuWithSearch";
import "./header.scss";

const Header = (props) => (
  <header className="header-site" role="banner">
    <div className="content">
      <h1>
        <span className="site-title">{props.header}</span>
        <span className="site-description">{props.subheader}</span>
      </h1>
      <div className="icons-home">
        <a aria-label="Send email" href="#">
          <svg className="icon icon-email">
            <use xlinkHref="#icon-email"></use>
          </svg>
        </a>
        <a aria-label="My Twitter" target="_blank" href="#">
          <svg className="icon icon-twitter">
            <use xlinkHref="#icon-twitter"></use>
          </svg>
        </a>
        <a aria-label="My Github" target="_blank" href="#">
          <svg className="icon icon-github-alt">
            <use xlinkHref="#icon-github-alt"></use>
          </svg>
        </a>
      </div>
    </div>
    <a role="button" className="down" data-scroll href="#scroll"><svg className="icon icon-angle-down"><use xlinkHref="#icon-angle-down"></use></svg></a>
    <MenuWithSearch />
  </header>
);

export default Header;