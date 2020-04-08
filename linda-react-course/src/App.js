import React from 'react';
import SkiDayCounter from './SkiDayCounter';
import SkiData from './SkiData';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          <SkiDayCounter
          total={skiData.total}
          powder={skiData.powder}
          backcountry={skiData.backcountry}
          goal={skiData.goal}
          />
        </p>
       
      
    </div>
  );
}

export default App;
