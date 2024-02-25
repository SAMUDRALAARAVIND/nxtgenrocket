import React from "react";
import { Link } from "react-router-dom";

export const Portfolio = () => {
    return (
        <div>
            <div style={{ padding: "20px" }}>
                <Link to=".." style={{ color: "white" }}><span className="material-icons">arrow_back_ios</span></Link>
            </div>
            <iframe src="./portfolio.pdf" style={{ width: "100vw", margin: "auto", height: "80vh" }}>

            </iframe>
        </div>
    );
}