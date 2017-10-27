import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../libs/auth';
import { userLoggedOut } from '../../actions/users';

class SideMenu extends Component {
    static propsTypes = {
        username: PropTypes.string
    }

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this._onClick}>
                <Menu.Item key="home">
                    <Icon type="home" />
                    <span>Home</span>
                </Menu.Item>
                {(this.props.username !== "")?
                    <Menu.Item key="import">
                        <Icon type="file-text" />
                        <span>Import Data</span>
                    </Menu.Item> : null
                }
                <Menu.Divider />
                {(this.props.username !== "")?
                    <Menu.Item key="logout">
                        <Icon type="logout" />
                        <span>Sign out</span>
                    </Menu.Item> : null
                }
            </Menu>
        );
    }

    _onClick = (e) => {
        switch (e.key) {
            case "import":
                this.props.history.push('/import');
                break;
            case "logout":
                logout();
                this.props.userLoggedOut();
                break;
            default:
                this.props.history.push("/");
        }
    }
}

const mapStateToProps = (state) => ({
    username: state.users.username
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ userLoggedOut }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideMenu));