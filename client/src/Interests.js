import React, { Component } from 'react';
import Interest from './Interest.js';
import InterestsInfo from './InterestsInfo.js';
import './Interests.css';

class Interests extends Component {
    createInterests = () => {
        const keyOrder = ['paddling', 'tahitian', 'hula', 'running'];
        const interests = [];
        for (var i=0; i < keyOrder.length; i++) {
            var interest = InterestsInfo[keyOrder[i]];
            interests.push(
                <Interest
                    title={interest.title}
                    group={interest.group}
                    video={interest.url}
                    img={interest.img}
                    description={interest.description}
                    description2={interest.description2}
                    img2={interest.img2}
                />
            );
        }
        return interests;
    }

    render() {
        return (
            <div className="interests">
                { this.createInterests() }
            </div>
        );
    }
}

export default Interests;
