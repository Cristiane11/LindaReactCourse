//import React from "./react";
//import SkiDayCounter from './SkiDayCounter';



const SkiDayList =({SkiData})=>{
    
    return(
                <div>
                    {
                        SkiData.map((item,index)=>{
                        return(
                            <SkiDayCounter
                            key={index}
                            total={SkiData.total}
                            powder={SkiData.powder}
                            backcountry={SkiData.backcountry}
                            goal={SkiData.goal}
                            />
                        );
                        
                    })
                }
                </div>
    );
}
export default SkiDayList;