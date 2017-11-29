const tableauInternPic = require('./img/tableauinterns.JPG');
const iolaniPic = require('./img/iolani.jpg');
const dh = require('./img/dh.jpg');
const fwolin = require('./img/olin.jpg');

var ExperiencesInfo = {
    tableauIntern: {
        title: 'Tableau Software',
        role: 'Software Engineer Intern',
        time: 'June - August 2017',
        place: 'Palo Alto, CA',
        description:['Worked on the Collaboration team as a full stack developer to develop a new feature with Java, C#, and React'],
        img: tableauInternPic,
        url: 'https://www.tableau.com/'
    },
    cmt: {
        title: 'Cambridge Mobile Telematics',
        role: 'Software Engineer Intern',
        time: 'June - August 2016',
        place: 'Cambridge, MA',
        description: ['Implemented new Android features in Java, along with minor work with a Python-PostgreSQL backend and in iOS Objective-C', 'Wrote a build-release script to automate Android releases', 'Continued summer work throughout the school year as a remote employee'],
        url: 'https://www.cmtelematics.com/'
    },
    datahouse: {
        title: 'DataHouse',
        role: 'Software Intern',
        time: 'June - July 2015',
        place: 'Honolulu, HI',
        description: ["Used Node, Express, and integration with third party REST APIs to develop solutions to meet customers' software needs", "Worked on a team of 6 to create a business model and develop an iOS app in Swift to help tourists navigate Hawaii and bring business to local companies. In charge of API integration, code architecture to ensure modularity, and UX based on user feedback"],
        img: dh,
        url: 'http://www.datahouse.com/'
    },
    olin: {
        title: 'Franklin W. Olin College of Engineering',
        role: 'B.S., Electrical and Computer Engineering',
        time: '2018',
        place: 'Needham, MA',
        img: fwolin,
        url: 'http://www.olin.edu/'
    },
    iolani: {
        title: "ʻIolani School",
        role: 'High School Diploma, Cum Laude Society Scholar',
        time: '2014',
        place: 'Honolulu, HI',
        img: iolaniPic,
        url: 'http://www.iolani.org/'
    }
}

module.exports = ExperiencesInfo;

