import { Component, OnInit } from '@angular/core';

declare var Raphael: any;

class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

@Component({
    selector: 'app-workbench',
    templateUrl: './workbench.component.html',
    styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {

    paper;
    arrow;
    secondArrow;
    thirdArrow;
    fourthArrow;
    width = 400;
    height = 400;
    toGreen;
    toBlue;
    toRed;
    funcToGreen;
    funcToBlue;
    funcToRed;
    circle;

    ngOnInit() {

        this.paper = Raphael("fun", this.width, this.height);
        // this.arrow = this.paper.path("M200,10V90H190L205,100L220,90H210V10Z");
        this.arrow = this.paper.path(this.getPath(this.pointA, this.pointB, 0, 4));
        this.secondArrow = this.paper.path(this.getPath(this.pointC, this.pointD, 1, 4));
        this.thirdArrow = this.paper.path(this.getPath(this.pointA, this.pointE, 2, 4));
        this.fourthArrow = this.paper.path(this.getPath(this.pointA, this.pointF, 3, 4));
        this.arrow.attr("fill", "#bbb");
        this.arrow.attr("stroke", "#bbb");
        this.secondArrow.attr("fill", "#bbb");
        this.secondArrow.attr("stroke", "#bbb");
        this.thirdArrow.attr("fill", "#bbb");
        this.thirdArrow.attr("stroke", "#bbb");
        this.fourthArrow.attr("fill", "#bbb");
        this.fourthArrow.attr("stroke", "#bbb");

        this.circle = this.paper.circle(30, 30, 25);
        this.toBlue = Raphael.animation({ fill: "#00f", stroke: "#ff0" }, 1000, "linear");
        this.toGreen = Raphael.animation({ fill: "#0f0", stroke: "#f0f" }, 1000, "linear");
        this.toRed = Raphael.animation({ fill: "#f00", stroke: "#0ff" }, 1000, "linear");

        this.circle.attr("fill", "#fff");
        this.circle.attr("stroke", "#000");
        this.circle.attr("stroke-width", "3");

        // initial cycle
        this.circle.animate(this.toGreen);
        setTimeout(() => {
            this.circle.animate(this.toRed);
        }, 2000);
        setTimeout(() => {
            this.circle.animate(this.toBlue);
        }, 4000);

        // repetitive cycle
        setTimeout(() => {
            setInterval(() => {
                this.circle.animate(this.toBlue);
            }, 6000);
        }, 4000);

        setTimeout(() => {
            setInterval(() => {
                this.circle.animate(this.toRed);
            }, 6000);
        }, 2000);

        setInterval(() => {
            this.circle.animate(this.toGreen);
        }, 6000);

    }

    topLeft = new Point(150, 50);
    topRight = new Point(300, 50);
    bottomLeft = new Point(150, 200);
    bottomRight = new Point(300, 200);

    secondTopLeft = new Point(350, 50);
    secondTopRight = new Point(400, 50);
    secondBottomLeft = new Point(350, 200);
    secondBottomRight = new Point(400, 200);

    lowerBottomRight = new Point(300, 250);
    thirdBottomRight = new Point(300, 300);
    fourthBottomRight = new Point(300, 350);

    pointA = this.topLeft;
    pointB = this.bottomRight;
    pointC = this.topLeft;
    pointD = this.lowerBottomRight;
    pointE = this.thirdBottomRight;
    pointF = this.fourthBottomRight;

    getPath(pointA: Point, pointB: Point, order: number, size: number): string {
        // order signifies from left (n) to right (0) what position this path should be in.
        let width = 6;
        let buffer = 16;
        let halfWidth = width / 2;
        let greaterX = pointA.x > pointB.x ? pointA.x : pointB.x;
        let lesserX = pointA.x < pointB.x ? pointA.x : pointB.x;
        let greaterY = pointA.y < pointB.y ? pointA.y : pointB.y;
        let lesserY = pointA.y > pointB.y ? pointA.y : pointB.y;
        // let midX = ((greaterX - lesserX) / 2) + lesserX;
        // let midY = ((greaterY - lesserY) / 2) + lesserY;
        let midX = greaterX - ((greaterX - lesserX) / size * (order + 0.5));
        let midY = ((greaterY - lesserY) / 2) + lesserY;
        console.log(pointA);
        console.log(pointB);
        console.log(midX);
        let downwards = greaterY === pointA.y;
        let horizontal = pointA.y === pointB.y;
        let vertical = pointA.x === pointB.x;
        let offset = 0;
        let pivotA = new Point(midX + offset, pointA.y);
        let pivotB = new Point(midX + offset, pointB.y);
        let backslash = (pointA.x <= pointB.x && pointA.y <= pointB.y)
            || (pointA.x > pointB.x && pointA.y > pointB.y); // determines if the line looks like "\" otherwise "/"
        let path;
        if (horizontal) {
            path = `M${pointA.x},${pointA.y - halfWidth}
            ${backslash ?
                    `H${midX - halfWidth}V${pointA.y - halfWidth * 3}L${midX + halfWidth},${pointA.y - halfWidth}`
                    : `H${midX + halfWidth}V${pointA.y - halfWidth * 3}L${midX - halfWidth},${pointA.y - halfWidth}`}
            H${pointB.x}
            V${pointB.y + halfWidth}
            ${backslash ?
                    `H${midX + halfWidth}L${midX - halfWidth},${pointB.y + halfWidth * 3}V${pointB.y + halfWidth}`
                    : `H${midX - halfWidth}L${midX + halfWidth},${pointB.y + halfWidth * 3}V${pointB.y + halfWidth}`}
            H${pointA.x}
            Z`
        } else if (vertical) {
            path = `M${pointA.x + halfWidth},${pointA.y}
            ${downwards ?
                    `V${midY - halfWidth}H${pointA.x + halfWidth * 3}L${pointA.x + halfWidth},${midY + halfWidth}`
                    : `V${midY - halfWidth}L${pointA.x + halfWidth * 3},${midY + halfWidth}H${pointA.x + halfWidth}`}
            V${pointB.y}
            H${pointB.x - halfWidth}
            ${downwards ?
                    `V${midY + halfWidth}L${pointB.x - halfWidth * 3},${midY - halfWidth}H${pointB.x - halfWidth}`
                    : `V${midY + halfWidth}H${pointB.x - halfWidth * 3}L${pointB.x - halfWidth},${midY - halfWidth}`}
            V${pointA.y}
            Z`
        } else {
            path = `M${pointA.x},${pointA.y - halfWidth}
            H${pivotA.x + (backslash ? halfWidth : -halfWidth)}
            ${downwards ? `V${midY - halfWidth}` : `V${midY + halfWidth}`}
            ${downwards ?
                    (backslash ?
                        `H${pivotA.x + halfWidth * 3}L${pivotA.x + halfWidth},${midY + halfWidth}`
                        : `H${pivotA.x - halfWidth * 3}L${pivotA.x - halfWidth},${midY + halfWidth}`)
                    : (backslash ?
                        `H${pivotA.x + halfWidth * 3}L${pivotA.x + halfWidth},${midY - halfWidth}`
                        : `H${pivotA.x - halfWidth * 3}L${pivotA.x - halfWidth},${midY - halfWidth}`)}
            V${pivotB.y - halfWidth}
            H${pointB.x}
            V${pointB.y + halfWidth}
            H${pivotB.x + (backslash ? -halfWidth : halfWidth)}
            ${downwards ? `V${midY + halfWidth}` : `V${midY - halfWidth}`}
            ${downwards ?
                    (backslash ?
                        `L${pivotA.x - halfWidth * 3},${midY - halfWidth}H${pivotA.x - halfWidth}`
                        : `L${pivotA.x + halfWidth * 3},${midY - halfWidth}H${pivotA.x + halfWidth}`)
                    : (backslash ?
                        `L${pivotA.x - halfWidth * 3},${midY + halfWidth}H${pivotA.x - halfWidth}`
                        : `L${pivotA.x + halfWidth * 3},${midY + halfWidth}H${pivotA.x + halfWidth}`)}
            V${pivotA.y + halfWidth}
            H${pointA.x}
            Z`;
        }
        // console.log(path);
        return path;
    }

    reset() {
        console.log('reset called');
        this.arrow.attr("fill", "#bbb");
        this.arrow.attr("stroke", "#bbb");
    }

    test() {
        console.log('test called');
        this.arrow.animate(Raphael.animation({
            fill: "#0c0",
            stroke: "#0c0"
        }, 300, "linear"));
    }

    goGreen() {
        this.circle.animate(this.toGreen);
    }

    goBlue() {
        this.circle.animate(this.toBlue);
    }

    goRed() {
        this.circle.animate(this.toRed);
    }
}