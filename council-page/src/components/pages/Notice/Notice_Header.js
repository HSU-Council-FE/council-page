import React from "react";
import { Link } from "react-router-dom";
//import "./styledComponent";
import Button from "react-bootstrap/Button";
import "./Notice.css";

const NotHeader = (props) => {
    return (
        <div className="not-header">
            <Link to="/notice/create">
                <Button
                    variant="outline-success"
                    style={{
                        position: "relative",
                        right: 0,
                        marginRight: "30px",
                    }}
                >
                    μκΈ μμ±
                </Button>{" "}
            </Link>
        </div>
    );
};

export default NotHeader;
