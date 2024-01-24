const { Circle, Triangle, Square } = require('../shape');

test("test to get right color for Circle", () => {
    const svgCircle = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.selectColor('green');
    const currentSvg = circle.render();
    expect(currentSvg).toEqual(svgCircle);
});

test("test to get right color for triangle", () => {
    const svgTriangle = '<polygon points="150,20 280,180 20,180" fill="blue" />';
    const triangle = new Triangle();
    triangle.selectColor('blue');
    const currentSvg = triangle.render();
    expect(currentSvg).toEqual(svgTriangle);
});

test("test to get right color for square", () => {
    const svgSquare = '<rect x="50" y="50" width="200" height="100" fill="orange" />';
    const square = new Square();
    square.selectColor('orange');
    const currentSvg = square.render();
    expect(currentSvg).toEqual(svgSquare);
});
