const voxel = require('./img/hello-world.gif');
const neato = require('./img/parallel.gif');
const jpeg = require('./img/dinner.png');
const uml = require('./img/aztex.png');
const drawing = require('./img/drawing.png');
const cpu = require('./img/cpu.png');
const cubeLite = require('./img/studio_cube.jpg');

var Projects = {
    voxelpaint: {
        title: 'Voxelpaint',
        description: 'Voxelpaint is a three-dimensional drawing application built using C++ and OpenGL.',
        img: voxel,
        url: 'https://joeylmaalouf.github.io/SoftSysViolentViolets/',
        code: ''
    },
    neato: {
        title: 'Neato Parking Assist',
        description: 'A parking assist system for Neato robots, created with Python, ROS, OpenCV, and numpy. Parallel, perpendicular, and manual parking assist modes included.',
        img: neato,
        url: 'https://ziyilan.github.io/',
        code: 'https://github.com/jovanduy/AutonomousParking'
    },
    jpeg2000: {
        title: 'JPEG2000',
        description: 'Discrete Wavelet Transform implemented in Python as part of the JPEG2000 compression standard.',
        img: jpeg,
        url: 'https://docs.google.com/presentation/d/1LkalEPYoLarCJHi9DlwPI2GMNfsuFHxwC6rinHrUUVg/edit?usp=sharing',
        code: 'https://github.com/jovanduy/jpeg2000'
    },
    pavement: {
        title: 'Pavement.js',
        description: 'A real-time collaborative drawing application where people can create and chat about drawings, in either public or private boards. Made real through Javascript, HTML, CSS, React, Paper.js, Socket.io, and Redis.',
        img: drawing,
        url: 'http://pavementjs.herokuapp.com/',
        code: 'https://github.com/zbhuiyan/Pavement'
    },
    aztex: {
        title: 'aztex',
        description: 'A live Markdown to LaTeX compiler and text editor written in Python.',
        img: uml,
        url: 'https://sites.google.com/site/aztexeditor/',
        code: 'https://github.com/thuctran289/aztex'
    },
    cube: {
        title: 'Cube Lite',
        description: "Cube Lite is an LED cube that responds to the music of your choosing. All six faces of the cube are LED matrices, which light up according to the music using beat detection. The cube is balanced on one of its vertices and spins for the ultimate visual display.",
        img: cubeLite,
        url: 'http://poe.olin.edu/2016/getlitt/',
        code: 'https://github.com/thecardkid/led-poe'
    },
    cpu: {
        title: 'Multi-Core Processor using VLIW',
        description: 'A MIPS single cycle pseudo multi-core processor utilizing VLIW, written in Verilog.',
        img: cpu,
        url: 'https://github.com/Daniel6/CompArchFA15/blob/master/FinalProject/poster/MultiCoreProcessor.pdf',
        code: 'https://github.com/Daniel6/CompArchFA15/tree/master/FinalProject'
    }
}

module.exports = Projects;

