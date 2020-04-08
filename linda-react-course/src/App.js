import React from 'react';
import SkiDayCounter from './SkiDayCounter';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <SkiDayCounter
          total={this.skiData.total}
          powder={this.skiData.powder}
          backcountry={this.skiData.backcountry}
          goal={this.skiData.goal}
          />
        </p>
       
      </header>
    </div>
  );
}

export default App;
