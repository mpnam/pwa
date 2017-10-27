import React, { Component } from 'react';
import { Icon } from 'antd';


export default class Item extends Component {
    render() {
        return (
            <div style={{display: "flex", flex: 1, flexDirection: 'row'}}>
                {(this.props.fileType === "excel")? <Icon style={{fontSize: 15}} type="file-excel" /> :  <Icon style={{fontSize: 15}} type="file-unknown" />}
                <p>{this.props.fileName}</p>
            </div>
        );
    }
}