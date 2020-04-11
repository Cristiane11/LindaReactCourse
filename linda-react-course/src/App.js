import React from 'react';
import SkiDayCounter from './SkiDayCounter';
import SkiData from './SkiData';
import './App.css';

class  App extends React.Component {
 render(){
  const skiData = this.props.SkiData
  return (
    <div className="App">
        {skiData.map((item,index)=>
          <SkiDayCounter
         
          total={skiData.total}
          powder={skiData.powder}
          backcountry={skiData.backcountry}
          goal={skiData.goal}
          />

    )}
      
      </div>
  );
}
}
export default App;
