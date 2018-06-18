import React, { Component } from 'react';
import { Rate, Icon, Switch, Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class RateSwitchRadio extends Component {
  state = {
    allowHalf: false,
    allowClear: true,
    value: 1
  }

  onChange = (checked) => {
    if (checked) {
      this.setState({allowHalf: true})
    } else {
      this.setState({allowHalf: false})
    }
  }

  radioChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (<div style={{
        marginTop: '42px'
      }}>
      <h1>RATE, SWITCH, RADIO</h1>
      <Rate
        style={this.state.value === 1 ? {color: 'red'} : this.state.value === 2 ? null : {color: 'brown'}}
        character={this.state.value === 1 ? <Icon type = "heart"/> : this.state.value === 2 ? <Icon type = "star"/> : <Icon type = "coffee"/>}
        allowHalf={this.state.allowHalf}
        allowClear={this.state.allowClear}
        defaultValue={4}/>

      <Switch defaultUnchecked="defaultUnchecked" onChange={this.onChange} unCheckedChildren="half" style={{marginLeft: '10px', marginRight: '10px'}}/>

      <RadioGroup onChange={this.radioChange} value={this.state.value}>
        <Radio value={1}>Heart</Radio>
        <Radio value={2}>Star</Radio>
        <Radio value={3}>Coffee</Radio>
      </RadioGroup>
    </div>)
  }
}
