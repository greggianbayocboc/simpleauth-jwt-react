import React from 'react'
import styles from './register.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { authenticationService } from '@/_services';

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username : "",
      password : "",
      email : "",
      name : ""
    }
  }

  handleSubmit =(e)=> {
    authenticationService.register(this.state.name, this.state.username, this.state.email, this.state.password)
  };

  handleChange = (field,value) => {

    this.setState({
      [field] : value
    })

  };

  test(err,values)
  {
    console.log('Received values of form: ', values);
  }


  render() {
    return (
          <Row>
            <Col span={10}></Col>
            <Col span={4}>
              <Card title="Register">
                <Form className="login-form">
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Fullname"
                      onChange={(e)=>this.handleChange('name',e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Email"
                      onChange={(e)=>this.handleChange('email',e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                      onChange={(e)=>this.handleChange('username',e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                      onChange={(e)=>this.handleChange('password',e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" onClick={()=>this.handleSubmit()} className="login-form-button">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col span={10}></Col>
          </Row>
    );
  }
}

