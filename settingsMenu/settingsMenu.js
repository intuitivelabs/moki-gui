
/*
render settings menu list
input: array of dashboards to render
*/
import React from "react";
import { Link } from 'react-router-dom';

 export const renderNavBarSettings = (dashboards, redirect) => {
        var navBar = [];
        for (var i = 0; i < dashboards.length; i++) {
                navBar.push(<Link to={"/" + dashboards[i]} className="bg-dark list-group-myitem list-group-item-action" onClick={redirect()} key={dashboards[i]}>
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <img className="marginRight" src={require(`./icons/${dashboards[i]}.png`)} alt={dashboards[i]} />
                        <span className={this.state.activeDashboard === dashboards[i] ? "menu-collapsed menuText activeDashboard" : "menu-collapsed menuText"}>{this.capitalizeFirstLetter(dashboards[i])}</span>
                    </div>
                </Link>);
        }
        return navBar;
    }

