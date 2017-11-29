const paddle = require('./img/crew.jpg');
const oneMan = require('./img/oneman.jpg');
const laOhana = require('./img/laOhana.jpg');
const xc = require('./img/xc.jpg');

var InterestsInfo = {
    paddling: {
        title: 'Outrigger canoe paddling',
        description: "Outrigger canoe padding is a popular sport in Hawaii. Six-seated canoes, or OC6s, are the most commonly raced canoes. In an OC6, every person in the canoe has a different purpose. I've been trained as a steersman, who sits in seat six. The steersman's main job is to steer the canoe along the course in the most effecient way, taking into account ocean and wind conditions, while making sure the crew remains safe. A skilled steersman should do as little actual steering as possible; the steersman is still another paddler in the canoe and needs to paddle to keep the boat moving quickly. If the steersman is constanlty fixing her own past overcorrections in aligning the canoe, she has no time to paddle and acts as dead weight in the back of the boat. However, in addition to steering and paddling, the steersman also skippers the canoe and makes sure all other crewmembers remain motivated, engaged, and in proper form. In Hawaii, I paddled with the canoe club Koa Kai.",
        description2: "I also have a one-man canoe, an OC1. I've never participated in an OC1 race, but when I'm in Hawaii I love taking my canoe out and paddling for a few hours in the morning when the ocean conditions are nice.",
        group: 'Koa Kai',
        img: paddle,
        img2: oneMan
    },
    tahitian: {
        title: 'Tahitian dance',
        group: 'Maʻohi Nui',
        description: 'I have been dancing Tahitian since I was 4 years old. Tahitian has taught me to approach things with passion and drive, as a Tahitian dancer always has to go "all out" when both performing and practicing. While living in Hawaii, I danced with the group Maʻohi Nui for 9 years. The video is from the Heiva I Honolulu competition that I entered in with Maʻohi Nui.',
        url: 'https://www.youtube.com/embed/rJluqCySlZQ'
    },
    hula: {
        title: 'Hula',
        group: 'Hālau Nā Mamo O Puʻanahulu',
        description: 'I have also been dancing hula since I was 4 years old. Hula instills a great amount of discipline and respect in the dancers. Beyond just the need for preciseness and meaning behind every physical motion in a dance, hula teaches dancers history of Hawaii, the importance of the connections between people, and to care for and respect resources. In Hawaii, I danced with the hālau (hula studio/group) Hālau Nā Mamo O Puʻanahulu, pictured here at our yearly family performance.',
        img: laOhana
    },
    running: {
        title: 'Distance running',
        description: "I started running in high school when I as part of my school's varsity cross country team. Although I do not run competitively anymore, I still run as often as I can in my free time. I've found running to be a great mental challenge, and the perfect way to help me feel physically better for spending hours a day sitting at a desk coding.",
        img: xc
    }
}

module.exports = InterestsInfo;
