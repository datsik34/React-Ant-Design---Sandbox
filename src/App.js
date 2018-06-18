import React, { Component } from 'react';
import reactLogo from './images/react.png';
import reactAntD from './images/antd.png';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';  //OBLIGATOIRE POUR ANTD

import Grid from './components/grid';
import Buttons from './components/buttons';
import RateSwitchRadio from './components/rateswitchradio';
import SliderCheckbox from './components/slidercheckbox';
import ModalLogin from './components/modallogin';

class App extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <header style={{backgroundColor: "#222",
                        height: "175px",
                        padding: "20px",
                        color: "white",}}>
          <img src={reactLogo} style={{height: "70px", marginRight: '20px'}} alt="reactLogo" />
          <img src={reactAntD} style={{height: "70px"}} alt="antdLogo" />
          <h1 style={{fontSize: "1.5em", color: 'white', marginTop: '25px'}}>SandBox React / Ant Design</h1>
        </header>
        <div style={{marginLeft: '50px', marginRight: '50px'}}>
          <Grid/>
          <Row gutter={64} style={{marginTop: "20px"}}>
            <Col md={24} lg={8}><Buttons/></Col>
            <Col md={24} lg={8}><RateSwitchRadio/></Col>
            <Col md={24} lg={8}><ModalLogin/></Col>
          </Row>
          <SliderCheckbox/>
        </div>
      </div>
    );
  }
}

export default App;
