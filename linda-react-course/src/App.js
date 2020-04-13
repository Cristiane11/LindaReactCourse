import React from 'react';
//import SkiDayCounter from './SkiDayCounter';
//import {SkiData} from './SkiData';
//import SkiDataList from './SkiDataList';
import './App.css';

const getPercent =decimal=>{
    return decimal * 100 + '%'
}
const calcGoalProgress = (total,goal)=>{
    return getPercent(total/goal)
}

class  App extends React.Component {
 render(){

//const {SkiData} = this.props

return (
    <div className="App">
        
          
      
      </div>
  );
 }
}
export default App;
