import React, { Component } from 'react';
import { Slider, Checkbox, Col, Row } from 'antd';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

export default class SliderCheckbox extends Component {
state = {
  locked: false,
  capped: 1
}
  checkbox = (e) => {
      this.setState({
        checkbox: e.target.locked,
        capped: e.target.checked ? null : 1
       });
  }

  render(){
    return(
      <div style={{paddingTop: "62px"}}>

          <h1>SLIDER, CHECKBOX</h1>
          <Row>
            <Col span={18} offset={3}>
              <Slider marks={marks} step={this.state.capped} defaultValue={37}/>
            </Col>
          </Row>
          <Checkbox onChange={this.checkbox}>Locked</Checkbox>
      </div>
    )
  }
}
