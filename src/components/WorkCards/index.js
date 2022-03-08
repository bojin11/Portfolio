import React, { useEffect, useState } from "react";
import { LikeButton } from "../";

const WorkCards = ({ work, handleSelect }) => {
    const [linkColor, setLinkColor] = useState("blue");

    useEffect(() => {
        if (linkColor === "blue" || linkColor === 'red') {
            const timeoutID = setTimeout(() => {
                setLinkColor(linkColor === "blue" ? "red" : "blue");
            }, 1500);
            return () => clearTimeout(timeoutID);
        }
        [];
    });

    return (
        <div className="card col-3">
            <img src={work.cover} className="card-img-top" alt="Work Cover" onClick={() => handleSelect(work.id)}/>
            <div className="card-body">
                <h3 className="card-title">{work.name}</h3>
                <p>{work.description}</p>
                <a
                    href={work.url}
                    target="blank"
                    className="card-link"
                    style={{ color: linkColor }}
                >
                    View here!
                </a>
                <p></p>
            </div>
        </div>
    );
};

export default WorkCards;
