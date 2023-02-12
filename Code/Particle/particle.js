//  Aufgabe: Endabgabe Feuerwerk
//  Name: Ann-Kathrin Pfeffer
//  Matrikel: 269899
//  Datum: 12.02.2023
//  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils
var firework;
(function (firework) {
    class Particle {
        duration;
        color;
        position;
        radius;
        opacity;
        velocity;
        constructor(_duration, _color, _position) {
            let velocity = new firework.Vector(Math.random() * firework.getRandomNumber(-30, 30), Math.random() * firework.getRandomNumber(-20, 20));
            this.velocity = velocity;
            this.duration = _duration;
            this.color = _color;
            this.position = new firework.Vector(_position.x, _position.y);
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }
        draw() {
            // 
        }
        move() {
            let offset = this.velocity;
            this.position.add(offset);
            this.duration--;
        }
    }
    firework.Particle = Particle;
})(firework || (firework = {}));
//# sourceMappingURL=particle.js.map