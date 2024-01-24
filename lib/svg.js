class Svg {
    constructor(){
        this.textLogo =''
        this.shapeLogo = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeLogo}${this.textLogo}</svg>`
    }
    setTextlogo(msg,color){
        this.textLogo = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${msg}</text>`
    }
    setshapelogo(shape){
        this.shapeLogo = shape.render()
    }
}
module.exports = Svg