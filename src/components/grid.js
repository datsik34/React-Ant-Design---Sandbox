import React, {Component} from 'react';
import {Col, Row} from 'antd';


export default class Grid extends Component {
  render() {
    return (
      <div style={{marginTop: '42px', color: 'white'}}>
        <h1 style={{fontFamily: 'Merriweather', fontWeight: "bold"}}>GRID</h1>
        <Row gutter={32} style={{marginBottom: '10px'}}>
          <Col span={4}><div style={{backgroundColor: '#41A9FD'}}>col-12</div></Col>
          <Col span={4}><div style={{backgroundColor: '#186DFD'}}>col-12</div></Col>
          <Col span={4}><div style={{backgroundColor: '#41A9FD'}}>col-12</div></Col>
          <Col span={4}><div style={{backgroundColor: '#186DFD'}}>col-12</div></Col>
          <Col span={4}><div style={{backgroundColor: '#41A9FD'}}>col-12</div></Col>
          <Col span={4}><div style={{backgroundColor: '#186DFD'}}>col-12</div></Col>
        </Row>
        <Row style={{marginBottom: '10px'}}>
          <Col span={8} style={{backgroundColor: '#41A9FD'}}>col-8</Col>
          <Col span={8} style={{backgroundColor: '#186DFD'}}>col-8</Col>
          <Col span={8} style={{backgroundColor: '#41A9FD'}}>col-8</Col>
        </Row>
      </div>
    )
  }
}
