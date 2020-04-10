import React from 'react';
import SkiDayCounter from './SkiDayCounter';
import SkiData from './SkiData';
import SkiDataList from './SkiDataList';
import './App.css';

const getPercent =decimal=>{
    return decimal * 100 + '%'
}
const calcGoalProgress = (total,goal)=>{
    return getPercent(total/goal)
}

class  App extends React.Component {
 render(){
  return (
    <div className="App">
        
          <SkiDataList/>
         

    )}
      
      </div>
  );
 }
}
export default App;
