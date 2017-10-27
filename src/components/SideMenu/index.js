import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class SideMenu extends Component {
    static propsTypes = {
        username: PropTypes.string
    }

    constructor(props) {
        super(props);

        console.log("[SideMenu]", props);
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
            </Menu>
        );
    }

    _onClick = (e) => {
        switch (e.key) {
            case "import":
                this.props.history.push('/import');
                break;
            default:
                this.props.history.push("/");
        }
    }
}

const mapStateToProps = (state) => ({
    username: state.users.username
});

export default withRouter(connect(mapStateToProps)(SideMenu));