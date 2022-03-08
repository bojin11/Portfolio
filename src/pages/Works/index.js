import React, { useState } from "react";
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { OopsImage } from "../../components";
import { PythonPuffImage } from "../../components";
import { BetterWorkImage } from "../../components";


const Works = () => {

    return (
        <main aria-label="main" className="works-container">
            <h1 className="pages-heading">Works</h1>
            <div className="row">
            <div className="card col-3">
            <PythonPuffImage />
            <div className="card-body">
                <h3 className="card-title">The PythonPuff Girls</h3>
                <p>A anonymous journalling website for female coders to share their coding adventures. Users can anonymously write posts and add gifs, comment on other posts, and react with emojis.</p>
                <a
                    href="https://pythonpuff-girls.netlify.app"
                    target="blank"
                    className="card-link"
                >
                    View here!
                </a>
                <p></p>
            </div>
        </div>
        <div className="card col-3">
            <BetterWorkImage />
            <div className="card-body">
                <h3 className="card-title">Better Work</h3>
                <p>Better work is a website where users can register and login, choose a habit they want to track, mark it as complete for the day and view a leadboard rank for their organisation.</p>
                <a
                    href="https://better-work.netlify.app"
                    target="blank"
                    className="card-link"  
                >
                    View here!
                </a>
                <p></p>
            </div>
        </div>
        </div>
        </main>
    );
};

export default Works;
