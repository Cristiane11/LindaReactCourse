import React from "./react";
import SkiDayCounter from './SkiDayCounter';

const SkiDayList =({SkiData})=>{
    return(
                <div>
                    {
                        skiData.map((item,index)=>{
                        return(
                            <SkiDayCounter
                            key={SkiData[i]}
                            total={SkiData[i].total}
                            powder={SkiData[i].powder}
                            backcountry={SkiData[i].backcountry}
                            goal={SkiData[i].goal}
                            />
                        );
                        
                    })
                }
                </div>
    );
}
export default SkiDayList;