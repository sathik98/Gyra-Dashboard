import React, { useState, useEffect } from "react";
import Radar from "../components/charts/radar";
import BarchatTwo from "../components/charts/barChart"
import Polarchat from "../components/charts/polar";

export default function History(props) {

    return (
        <>
            <div className="right-content">
                <div className="dashboard-head">
                    <h2>History</h2>
                    <p>The sample text</p>
                </div>


                <div className="project-chart-box">
                    <BarchatTwo />
                </div>
                <div className="chart-boxes">
                    <div className="project-chart-box">
                        <Radar />
                    </div>
                    <div className="project-chart-box">
                        <Polarchat />
                    </div>
                </div>

            </div>


        </>
    );
}