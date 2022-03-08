import React, { useState } from "react";
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { WorkCards } from "../../components";

const Works = () => {
    const [work, setWork] = useState([
        {
            id: 1,
            name: "The PythonPuff Girls",
            description: "A anonymous journalling website for female coders to share their coding adventures. Users can anonymously write posts and add gifs, comment on other posts, and react with emojis.",
            cover: "./images/pythonpuff-girls.png",
            url: "https://pythonpuff-girls.netlify.app"
        },
        {
            id: 2,
            name: "Better Work",
            description: "Better work is a website where users can register and login, choose a habit they want to track, mark it as complete for the day and view a leadboard rank for their organisation.",
            cover:
                "./images/better-work.png",
            url: "https://better-work.netlify.app"
        }
    ]);

    const history = useHistory();
    const params = useParams();
    const handleSelect = (id) => {
        history.push(`works/${id-1}`);
    };

    const renderWorks = work.map((work) => (
        <WorkCards key={work.id} work={work} handleSelect={handleSelect} />
    ))

    return (
        <main aria-label="main" className="works-container">
            <h1 className="pages-heading">Works</h1>
            <Switch>
                <Route
                    exact
                    path={"/works"}
                    render={() => <div className="row">{renderWorks}</div>}
                />
                <Route
                    path={"/works/:id"}
                    render={({ match }) => (
                        <div className="row">
                            <WorkCards
                                work={work[match.params.id]}
                                handleSelect={() => {}}
                            />
                        </div>
                    )}
                />
            </Switch>
        </main>
    );
};

export default Works;
