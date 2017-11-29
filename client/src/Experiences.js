import React, { Component } from 'react';
import Experience from './Experience';
import ExperiencesInfo from './ExperiencesInfo';
import './Experiences.css';

class Experiences extends Component {
    createWorkExperiences = () => {
        const keyOrder = ['tableauIntern', 'cmt', 'datahouse'];
        const experiences = [];
        for (var i=0; i < keyOrder.length; i++) {
            var experience = ExperiencesInfo[keyOrder[i]];
            experiences.push(
                <Experience
                    key={experience.title}
                    title={experience.title}
                    role={experience.role}
                    time={experience.time}
                    place={experience.place}
                    img={experience.img}
                    description={experience.description}
                    url={experience.url}
                />
            );
        }
        return experiences;
    }

    createEducationExperiences = () => {
        const keyOrder = ['olin', 'iolani'];
        const experiences = [];
        for (var i=0; i < keyOrder.length; i++) {
            var experience = ExperiencesInfo[keyOrder[i]];
            experiences.push(
                <Experience
                    key={experience.title}
                    title={experience.title}
                    role={experience.role}
                    time={experience.time}
                    place={experience.place}
                    img={experience.img}
                    description={experience.description}
                    url={experience.url}
                />
            );
        }
        return experiences;
    }

    render() {
        return (
            <div className="experiences">
                <h2>Work</h2>
                { this.createWorkExperiences() }
                <h2>Education</h2>
                { this.createEducationExperiences() }
            </div>
        );
    }
}

export default Experiences;

