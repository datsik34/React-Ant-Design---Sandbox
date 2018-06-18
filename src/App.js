import React, { Component } from 'react';
import reactLogo from './images/react.png';
import reactAntD from './images/antd.png';
import 'antd/dist/antd.css';  //OBLIGATOIRE POUR ANTD

import Grid from './components/grid';
import Buttons from './components/buttons';
import RateSwitchRadio from './components/rateswitchradio';
import SliderCheckbox from './components/slidercheckbox';

class App extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <header style={{backgroundColor: "#222",
                        height: "150px",
                        padding: "20px",
                        color: "white",}}>
          <img src={reactLogo} style={{height: "80px", marginRight: '20px'}} alt="reactLogo" />
          <img src={reactAntD} style={{height: "80px"}} alt="antdLogo" />
          <h1 style={{fontSize: "1.5em", color: 'white'}}>SandBox React / Ant Design</h1>
        </header>
        <div style={{marginLeft: '50px', marginRight: '50px'}}>
          <Grid/>
          <Buttons/>
          <RateSwitchRadio/>
          <SliderCheckbox/>
        </div>
      </div>
    );
  }
}

export default App;
