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
<<<<<<< HEAD
  const skiData = this.props.SkiData
=======
>>>>>>> 7f1ef282ba9a37d249aa1efb1eb4c27a711c65bb
  return (
    <div className="App">
        
          <SkiDataList/>
         

    )}
      
      </div>
  );
 }
}
export default App;
