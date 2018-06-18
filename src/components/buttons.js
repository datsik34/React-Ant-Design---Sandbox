import React, {Component} from 'react';
import { Button } from 'antd';



export default class Buttons extends Component {
  state = {
    loading: false,
    iconLoading: false,
    isDisabled: false
  }

  enterLoading = () => {
    this.setState({ loading: true });
    this.setState({ isDisabled: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  reset = () => {
    this.setState({ loading: false });
    this.setState({ iconLoading: false });
    this.setState({ isDisabled: false });
  }


  render(){
    return(
      <div style={{marginTop: '42px', color: 'white'}}>
        <h1 style={{fontFamily: 'Merriweather', fontWeight: "bold"}}>BUTTONS</h1>
        <Button type="primary" style={{marginRight: '10px'}} loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
        <Button type="danger" style={{marginRight: '10px'}} onClick={this.reset}>RESET</Button>
        <Button type="primary" size='default' disabled={this.state.isDisabled}>{!this.state.isDisabled ? 'Primary' : 'DISABLED'}</Button>
      </div>
    )
  }
}
