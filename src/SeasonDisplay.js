import './SeasonDisplay.css'
import React from 'react';

//Can avoid Multple Ternary Operator by using season Config
const seasonConfig = {
    summer : {
        text : "let's hit the beach!",
        iconName : 'sun'
    },
    winter : {
        text : 'Burr its Cold',
        iconName : 'snowflake'
    }
}

const getSeason = (lat , month) =>{
    if(month > 2 && month < 9){
      return  lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.latitude,new Date().getMonth());

    //acts as ternari operator which takes input as season and returns appropriate value getSeason () => String shouuld be same [summer,winter]
     const {text , iconName} =seasonConfig[season] //{ text , iconName }
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;