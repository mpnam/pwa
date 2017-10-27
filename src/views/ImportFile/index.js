import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Button, Icon, Tabs } from 'antd';
import Item from './item';

import { excelToJSON } from './services/helpers';

export default class ImportFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            jsons: [],
        };
    }

    render() {
        return (
            <div>
                <Dropzone 
                    ref={(node) => this.dropzoneRef = node} 
                    onDrop={this._onDrop} 
                    style={{padding: 10, height:50, backgroundColor: '#F2F2F2', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}
                >
                    <center>Click or drag file to this area to upload.</center>
                </Dropzone>
                <div style={{margin:10}}>
                    {this.state.files.map((item, index) => {
                        let extension = item.name.split('.').pop();
                        if (extension === "xls" || extension === "xlsx")
                            return <Item fileType="excel" fileName={item.name} key={index} />;
                            return <Item fileType="unknown" fileName={item.name} key={index} />;
                    })}
                </div>
                <Button type="primary" onClick={this._upLoadHandler} style={{marginTop: 5}}>
                    <Icon type="rocket" />Convert To JSON
                </Button>
                {(this.state.jsons.length > 0)?
                    <Tabs type="card" defaultActiveKey="0" tabPosition="left" style={{height:500, marginTop: 20}}>
                        {this.state.jsons.map((data, index) => {
                            return (
                                <Tabs.TabPane tab={data.name} key={index}>{data.content}</Tabs.TabPane>
                            );
                        })}
                    </Tabs> : null
                }
            </div>
        );
    }

    _onDrop = (acceptedFiles, rejectedFiles) => {
        this.setState({jsons: []});
        this.setState({
            files: acceptedFiles
        });
    }

    _upLoadHandler = () => {
        this.state.files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsBinaryString = reader.result;
                this.setState({
                    jsons: [...this.state.jsons, {
                        name:file.name,
                        content: excelToJSON(fileAsBinaryString)
                    }]
                });
            };
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
    
            reader.readAsBinaryString(file);
        });
    }
}