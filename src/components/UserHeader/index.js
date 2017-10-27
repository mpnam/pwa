import React, { Component } from 'react';
import { Button, Avatar } from 'antd';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class UserHeader extends Component {
    render() {
        if (this.props.users.username !== "")
            return (
                <div>
                    <div style={{display: "inline-block"}}><Avatar style={{marginRight: 5, marginBottom: -10}} src={this.props.users.avatar} /></div>
                    <span style={{display: "inline-block"}}><p>{this.props.users.username}</p></span>
                </div>
            );
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