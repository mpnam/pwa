import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout, Icon, Row, Col } from 'antd';

import UserHeader from './components/UserHeader';
import SideMenu from './components/SideMenu';
import Home from './views/Home';
import Login from './views/Login';
import ImportFile from './views/ImportFile';

import { connect } from 'react-redux';

import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Layout>
                        <Layout.Sider tbreakpoint="lg" collapsedWidth="0">
                            <div className="logo" />
                            <SideMenu />
                        </Layout.Sider>
                        
                        <Layout>
                            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                                <Row type="flex" justify="space-between" align="bottom">
                                    <Col style={{marginLeft:20}}><h1>{this.props.routes.screen}</h1></Col>
                                    <Col style={{marginRight:20}}><UserHeader /> </Col>
                                </Row>            
                            </Layout.Header>
                            <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/import" component={ImportFile} />
                                <Route exact path="/login" component={Login} />
                            </Layout.Content>
                        </Layout>
                    </Layout>
                    <Layout.Footer>
                        <center>Demo PWA with ReactJS</center>
                        <center>@copyright Nam Mai 2017</center>
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

const mapStateToProps = (state) => ({
    users: state.users,
    routes: state.routes
});

export default connect(mapStateToProps)(App);