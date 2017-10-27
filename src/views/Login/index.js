import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { changeScreen } from '../../actions/routes';
import { userFetchInformation } from '../../actions/users';

import './styles.css';


class Login extends Component {
    componentWillMount() {
        this.props.changeScreen("Sign in");
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this._loginHandler} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }

    _loginHandler = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.userFetchInformation(values.userName);
                this.props.history.push("/");
            }
        });
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeScreen, userFetchInformation }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login)));

