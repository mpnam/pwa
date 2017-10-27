import React, { Component } from 'react';
import { Layout, Timeline, Icon } from 'antd';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { changeScreen } from '../../actions/routes';


class Home extends Component {
    componentWillMount() {
        this.props.changeScreen("Home");
    }

    render() {
        return (
            <div>
                <div>
                    This is my demonstration of using React to develop Progressive Web App. 
                    Here is my progress so far:
                </div>
                <Timeline style={{margin: 20}}>
                    <Timeline.Item color="green">Create and deploy ReactJS App to Github Pages.</Timeline.Item>
                    <Timeline.Item color="green">Use Ant library to build this beautiful UI.</Timeline.Item>
                    <Timeline.Item color="green">Use Redux.</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                        <p>Fake authentication.</p>
                        <p>Authentication using Firebase.</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ changeScreen }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));