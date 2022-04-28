import React from "react";
import Contents from "./Content";
import "./Pages.css";

const Home = () => {
    return (
        <div>
            <div className="card card-body-me">
                <div className="card-body">
                    <div>
                        <Contents />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
