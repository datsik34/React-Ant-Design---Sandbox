import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import React, {Component} from 'react';
const FormItem = Form.Item;

class UnWrapped extends React.Component {
  state = { visible: false }

  showModal = () => this.setState({visible: true});
  handleOk = (e) => this.setState({visible: false});
  handleCancel = (e) => this.setState({visible: false});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{marginTop: '42px'}}>
        <h1>MODAL, LOGIN FORM</h1>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal
          title="Please login"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={'400px'}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Form onSubmit={this.handleSubmit} style={{maxWidth: "300px"}}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a style={{float: "right"}} href="">Forgot password</a>
                <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </FormItem>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

const ModalLogin = Form.create()(UnWrapped);
export default ModalLogin
