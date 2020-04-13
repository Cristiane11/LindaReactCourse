//import React from 'react';
//import {render}from 'react-dom';
//import {SkiData} from './SkiData';


const getPercent =decimal=>{
    return decimal * 100 + '%'
}
const calcGoalProgress = (total,goal)=>{
    return getPercent(total/goal)
}

const SkiDayCounter =({total,powder,backcountry,goal})=>{
    
    
    
    return(
        <section>
        <div>
            <p>Total Days:{total}</p>
        </div>
        
        <div>
            <p>Powder Days:{powder}</p>
        </div>
        
        <div>
            <p>Backcounry Days:{backcountry}</p>
        </div>
        
        <div>
            <p>Goal Progress:{calcGoalProgress(total,goal)}</p>
        </div>
        </section>
    )
}
export default SkiDayCounter;