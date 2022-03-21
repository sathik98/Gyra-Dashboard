import React, { useState } from "react";
import logo from '../assests/images/logo.png'
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { GoFileSubmodule } from 'react-icons/go';
import { BsShield } from 'react-icons/bs';
import { BsBriefcase } from 'react-icons/bs';
import { NavLink, Link } from "react-router-dom";


const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>

            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo_img" />
                </div>
                <div className="sidebar_heading">
                    <b>Gyra</b>
                    <p>codoid Innovation</p>
                </div>


                <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
                    {inactive ? (
                        <BsArrowRightCircle />
                    ) : (
                        <BsArrowLeftCircle />
                    )}
                </div>
            </div>

            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    <li>
                        {/* <a className="menu-item"> */}
                        <NavLink to="/dashboard" activeClassName="active" className="menu-item">
                            <div className="menu-icon">
                                <MdDashboard />
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Dashboard</span>
                        {/* </a>*/}
                        </NavLink>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                        {/* <a className="menu-item"> */}
                        <NavLink to="/project" activeClassName="active" className="menu-item">
                            <div className="menu-icon">
                                <GoFileSubmodule />
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Project</span>
                        {/* </a> */}
                        </NavLink>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                        {/* <a className="menu-item"> */}
                        <NavLink to="/test" activeClassName="active" className="menu-item">
                            <div className="menu-icon">
                                <BsShield />
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Test Suite</span>
                        {/* </a> */}
                        </NavLink>
                    </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li>
                        {/* <a className="menu-item"> */}
                        <NavLink to="/history" activeClassName="active" className="menu-item">
                            <div className="menu-icon">
                                <BsBriefcase />
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>History</span>
                        {/* </a> */}
                        </NavLink>
                    </li>
                </ul>
            </div>




        </div>


    );
}

export default SideMenu;