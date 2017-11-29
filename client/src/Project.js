import React, { Component } from 'react';

class Project extends Component {
    render () {
        return (
            <div className="project">
                <h2 className="title">{this.props.title}</h2>
                <img src={this.props.img} alt={this.props.title} />
                <p className="description">{this.props.text}</p>
                <a className="website link" href={this.props.url}>more information</a>
                <a className="code link" href={this.props.code}>{'{ code }'}</a>
            </div>
        );
    }
}

export default Project;

