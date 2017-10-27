import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout, Icon } from 'antd';

import SideMenu from './components/SideMenu';
import Home from './views/Home';
import ImportFile from './views/ImportFile';

import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Layout>
                        <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <SideMenu />
                        </Layout.Sider>
                        
                        <Layout>
                            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                                <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this._toggle} />                      
                            </Layout.Header>
                            <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 500 }}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/import" component={ImportFile} />
                            </Layout.Content>
                        </Layout>
                    </Layout>
                    <Layout.Footer>
                        <center>Demo PWA with ReactJS</center>
                    </Layout.Footer>
                </Layout>
            </BrowserRouter>
        );
    }
    
    _toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
}