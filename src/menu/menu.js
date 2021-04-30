/*
render menu list 
input: array of dashboards to render
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const renderNavBar = dashboards => {
  var navBar = [];

  for (var i = 0; i < dashboards.length; i++) {
    if (dashboards[i] !== "web") {
      navBar.push( /*#__PURE__*/_jsx(Link, {
        to: "/" + dashboards[i],
        id: "/" + dashboards[i],
        className: window.location.pathname === "/" + dashboards[i] ? "activeDashboardDiv list-group-myitem list-group-item-action" : "bg-dark list-group-myitem list-group-item-action",
        children: /*#__PURE__*/_jsxs("div", {
          className: "d-flex w-100 justify-content-start align-items-center",
          children: [/*#__PURE__*/_jsx("img", {
            className: "marginRight",
            src: require(`./icons/${dashboards[i]}.png`).default,
            alt: dashboards[i]
          }), /*#__PURE__*/_jsx("span", {
            className: window.location.pathname === "/" + dashboards[i] ? "menu-collapsed menuText activeDashboard" : "menu-collapsed menuText",
            children: capitalizeFirstLetter(dashboards[i])
          })]
        })
      }, dashboards[i]));
    }
  }

  return navBar;
};