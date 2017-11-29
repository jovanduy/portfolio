import React, { Component } from 'react';
import Project from './Project';
import ProjectInfo from './ProjectsInfo';
import './Projects.css'

class Projects extends Component {
    createProjects = () => {
        const keyOrder = ['voxelpaint', 'neato', 'jpeg2000', 'aztex', 'pavement', 'cpu', 'cube'];
        let projects = [];
        for (var i=0; i < keyOrder.length; i++) {
            var project = ProjectInfo[keyOrder[i]];
            projects.push(
                <Project
                    key={project.title}
                    title={project.title}
                    img={project.img}
                    text={project.description}
                    url={project.url}
                    code={project.code}
                />
            );
        }
        return projects;
    }

    render() {
        return (
            <div className="projects">
                <p>A collection of personal and class projects. Learn more by visiting a project's website or reading through the code.</p>
                { this.createProjects() }
            </div>
        );
    }
}

export default Projects;
