import React from 'react';


// Below is an example of using a stateless functional component
// Since it's not really doing anything great it can still be as a function.
// Also the values in the props can be destructured.
const Header = ({tagline}) => (
    <header className="top">
                <h1>
                    Catch 
                    <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{tagline}</span>
                </h3>
            </header>
)

export default Header;