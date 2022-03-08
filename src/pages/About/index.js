import React from "react";
import { CVDocument, ProfileImage, CVSummaryImage } from "../../components";

const About = () => {
    return (
        <main aria-label="main" className="about-container">
            <div style={{height: "800px"}}>
            <h1 className="pages-heading">About</h1>
            <ProfileImage />
            <div style={{width: "890px", float:"right", margin:"15px 20px 0px 0px"}}>
            <CVSummaryImage />
            <CVDocument />
            </div>   
            </div>     
        </main>
    );
};

export default About;
