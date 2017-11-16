// in Sketch.js
import React, { Component } from 'react';
import SketchRenderer from './SketchRenderer';
import MarkerSearch from './MarkerSearch';

class Sketch extends Component {
    ...
    handleMarkerFound = () => this.setState({ markerFound: true });
    ...
    render() {
        const { markerFound } = this.state;
        const { image, blackImage } = this.props;

        return (
            <div>
                <SketchRenderer
                    image={image}
                    blackImage={blackImage}
                    onMarkerFound={this.handleMarkerFound}
                /> {/* This is the component actually rendering our three.js scene, more about it later */}
                {!markerFound && <MarkerSearch />}
                ...
            </div>
        );
    }
}
