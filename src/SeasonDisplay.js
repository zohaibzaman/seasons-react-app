import React from 'react';

import './SeasonDisplay.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9)
        return lat > 0 ? 'summer' : 'winter';
    else
        return lat < 0 ? 'winter' : 'summer';
};

const seasonConfiguration = {
    summer: {
        textToDisplay: 'Damn! So hot, Lets go to Beach',
        iconName: 'sun'
    },
    winter: {
        textToDisplay: 'Burr! Its Chilly!',
        iconName: 'snowflake'
    }
}

const SeasonDisplay = (props) => {
    console.log("in season display component .. ", props)
    const season = getSeason(props.lat, new Date().getMonth())
    const { textToDisplay, iconName } = seasonConfiguration[season];
    console.log(season, " ....returning from season display component")
    console.log(`icon is ${iconName}`)
    return (
        <div className ={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h2> {textToDisplay}</h2>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
