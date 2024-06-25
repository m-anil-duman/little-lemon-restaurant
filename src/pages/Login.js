// src/pages/Login.js
import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './styles/Login.css';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!',email: true}]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="/ForgotPassword">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="default" className="login-form-button">
              Log in with Google
            </Button>
            <Button type="default" className="login-form-button">
              Log in with Facebook
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
