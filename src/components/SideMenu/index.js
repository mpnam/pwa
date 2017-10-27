import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

class SideMenu extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this._onClick}>
                <Menu.Item key="home">
                    <Icon type="home" />
                    <span>Home</span>
                </Menu.Item>

                <Menu.Item key="import">
                    <Icon type="file-text" />
                    <span>Load Excel</span>
                </Menu.Item>
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

export default withRouter(SideMenu);