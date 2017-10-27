import React, { Component } from 'react';
import { Icon, Button } from 'antd';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class UserHeader extends Component {
    render() {
        if (this.props.users.username !== "")
            return <div><Icon type="user" /> <span>{this.props.users.username}</span></div>;
        return <Button type="primary" icon="login" onClick={this._loginHandler}>Sign in</Button>;
    }

    _loginHandler = () => {
        this.props.history.push('/login');
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default withRouter(connect(mapStateToProps)(UserHeader));