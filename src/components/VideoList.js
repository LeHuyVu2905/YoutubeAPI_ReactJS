import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
    render() {

        const renderedList = this.props.videos.map((video, index) => <VideoItem onVideoSelect={ this.props.onVideoSelect } key={ index } video={ video } />);

        return (
            <div className="ui relaxed divided list">
                { renderedList }
            </div>
        );
    }
}

export default VideoList;