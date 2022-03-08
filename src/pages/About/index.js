import React from "react";
import { ProfileImage } from "../../components";

const About = () => {
    return (
        <main aria-label="main" className="about-container">
            <div style={{height: "800px"}}>
            <h1 className="pages-heading">About</h1>
            <ProfileImage />
            <div style={{width: "890px", float:"right", margin:"15px 20px 0px 0px"}}>
            <img style={{width: "100%"}} src="../../images/futureproof-cv-summary.png"/>
            <p> To see more click <a style={{textDecoration:"underline"}} href="../../documents/futureproof-cv-bojin.pdf">here</a> </p>
            </div>   
            </div>     
        </main>
    );
};

export default About;
