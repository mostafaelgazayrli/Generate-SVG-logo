const inquirer = require('inquirer');
const {Circle,Triangle,Square} = require('./shape')
const Svg = require('./svg')
const {writeFile} = require('fs/promises');

const questions = [
{
    name: 'logoText',
    type: 'input',
    message: 'Please enter your logo text; it has to be less than 3 characters',
},
{
    name: 'textColor',
    type: 'input',
    message: 'Please enter text color',
},
{
    name: 'shape',
    type: 'list',
    message: 'Please choose your logo shape',
    choices: ['circle', 'square', 'triangle'],
},
{
    name: 'logoColor',
    type: 'input',
    message: 'Please enter your logo color.',
},
];

class SvgLogo {
    rum () {
    return inquirer
    .prompt(questions).then(({ logoText, textColor, shape, logoColor }) => {
    let logoShape;
    switch (shape) {
        case 'circle':
        logoShape = new Circle();
        break;
        case 'square':
        logoShape = new Square();
        break;
        case 'triangle':
        logoShape = new Triangle();
        break;
        default:
        console.log('Invalid shape selected');
    }
    logoShape.selectColor(logoColor)
    const svg = new Svg
    svg.setTextlogo(logoText,textColor)
    svg.setshapelogo(logoShape)
    return writeFile('logo.svg', svg.render());
    })
    .then(()=>{
        console.log('YOUR LOGO IS READY !!')
    })
}}

module.exports = SvgLogo;
