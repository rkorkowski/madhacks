import React from "react";

import './Error.css';

const Error = () => {
    return (
        <div className="error">
            <div className="error_bar">
                <p>Error: Path does not exist.</p>
            </div>
        </div>
    );
};

export default Error;