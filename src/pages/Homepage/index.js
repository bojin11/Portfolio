import React from "react";
import { ArtistBio } from "../../components";
import { Footer } from '../../layout';

const Homepage = () => {
    return (
        <main aria-label="main" className="homepage-container">
            <ArtistBio />
            <Footer />
        </main>
    );
};
export default Homepage;
