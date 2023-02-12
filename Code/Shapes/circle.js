//  Aufgabe: Endabgabe Feuerwerk
//  Name: Ann-Kathrin Pfeffer
//  Matrikel: 269899
//  Datum: 12.02.2023
//  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils
var firework;
(function (firework) {
    class Circle extends firework.Particle {
        constructor(_duration, _color, _position) {
            super(_duration, _color, _position);
            this.draw();
        }
        draw() {
            firework.crc2.save();
            firework.crc2.beginPath();
            firework.crc2.translate(this.position.x, this.position.y);
            firework.crc2.arc(0, 0, 7 * this.radius / 30, 0, 2 * Math.PI);
            firework.crc2.closePath();
            firework.crc2.fillStyle = this.color;
            if (this.duration < 0) {
                firework.crc2.globalAlpha = this.opacity;
                this.opacity -= 0.5;
            }
            firework.crc2.fill();
            firework.crc2.restore();
        }
    }
    firework.Circle = Circle;
})(firework || (firework = {}));
//# sourceMappingURL=circle.js.map