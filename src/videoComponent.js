import React, {Component } from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import videoList from './videos.json';


export default class VideoComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row gutter={40}>
                {(videoList).map(video => 
                <Col span={4}>
                    <ShakaPlayer src={video.url} />
                    <p>{video.name}</p>
                    <p>{video.title}</p>
                </Col>
            )}
            </Row>
        )
    }


}