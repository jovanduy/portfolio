import React, { Component } from 'react';

class Experience extends Component {
    createDescriptionList = () => {
        const points = [];
        for (var i=0; i < this.props.description.length; i++) {
            points.push(
                <li key={i}>
                    {this.props.description[i]}
                </li>
            );
        }
        return points;
    }

    createDetailsEducation = () => {
        if (this.props.img) {
            return (
                <div className="details">
                    <img src={this.props.img} alt={this.props.title} />
                    <span className="description">{this.props.description}</span>
                </div>
            );
        } else {
            return (
                <div className="details">
                    <span className="description">{this.props.description}</span>
                </div>
            );

        }
    }

    createDetailsWork = () => {
        if (this.props.img) {
            return (
                <div className="details">
                    <img src={this.props.img} alt={this.props.title} />
                    <ul>
                        { this.createDescriptionList() }
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="details">
                    <ul>
                        { this.createDescriptionList() }
                    </ul>
                </div>
            );
        }
    }

    createDetails = () => {
        if (this.props.description) {
            return this.createDetailsWork();
        } else {
            return this.createDetailsEducation();
        }
    }

    render() {
        return (
            <div className="experience">
                <div>
                    <a className="title" href={this.props.url}>{this.props.title}</a>
                    <span className="role">{this.props.role}</span>
                </div>
                <span className="time">{this.props.time + " · "}</span>
                <span className="location">{this.props.place}</span>
                { this.createDetails() }
            </div>
        );
    }
}

export default Experience;
