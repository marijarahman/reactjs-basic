import React from 'react';

// export - using outside file
// this is stateless component
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar">
                        <li><a href={props.homeLink}>{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};