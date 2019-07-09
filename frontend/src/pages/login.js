import React from 'react'
import styles from './login.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { authenticationService } from '@/_services';
import { userService } from '@/_services';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username : "",
      password : ""
    }
  }

  componentWillMount(){
    var user = userService.getMe();
    console.log("CURRENT : ", user)
  }

  handleSubmit =(e)=> {
    authenticationService.login(this.state.username,this.state.password)
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



  render(){
    return (
      <div className={styles.center}>
        <Row>
          <Col span={10}></Col>
          <Col span={4}>
            <Card title="Login">
              <Form className="login-form" >
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
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <Button type="primary" onClick={()=>this.handleSubmit()} className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="/register">register now!</a>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={10}></Col>
        </Row>
      </div>
    );
  }

}
