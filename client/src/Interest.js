import React, { Component } from 'react';

class Interest extends Component {
    createMedia = () => {
        if (this.props.video) {
            return (
                <div className="video-wrapper">
                    <iframe
                        title={this.props.title}
                        className="video"
                        src={this.props.video}
                        frameborder="0"
                        gesture="media"
                        allowfullscreen="true"
                    />
                </div>
            );
        } else {
            return (
                <img src={this.props.img} alt={this.props.title} />
            );
        }
    }

    createSecondDescription = () => {
        if (this.props.img2) {
            return (
                <div>
                    <img className="img2" src={this.props.img2} alt={this.props.title} />
                    <p className="description two">{this.props.description2}</p>
                </div>

            );
        }
    }
    
    render() {
        return (
            <div className="interest">
                <span className="title">{this.props.title}</span>
                <span className="group">{this.props.group}</span>
                { this.createMedia() }
                <p className="description">{this.props.description}</p>
                { this.createSecondDescription() }
            </div>
        );
    }
}

export default Interest;
