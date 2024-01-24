class ShapeColor {
    constructor() {
        this.color = "";
    }

    selectColor(color) {
        this.color = color;
    }
}

class Circle extends ShapeColor {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends ShapeColor {
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

class Triangle extends ShapeColor {
    render() {
        return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
