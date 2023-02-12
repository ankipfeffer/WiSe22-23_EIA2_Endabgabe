var firework;
(function (firework) {
    class Rocket {
        duration;
        shape;
        color;
        position;
        particles = [];
        constructor(_duration, _shape, _color, _position) {
            this.duration = _duration;
            this.shape = _shape;
            this.color = _color;
            this.position = _position;
            this.explode();
        }
        explode() {
            for (let i = 0; i < 30; i++) {
                // Kreis oder Viereck
                switch (this.shape) {
                    case "circle":
                        this.particles.push(new firework.Circle(this.duration, this.color, this.position));
                        break;
                    case "square":
                        this.particles.push(new firework.Square(this.duration, this.color, this.position));
                        break;
                }
            }
        }
        draw() {
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].move();
                this.particles[i].draw();
                if (this.particles[i].duration <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }
    }
    firework.Rocket = Rocket;
})(firework || (firework = {}));
//# sourceMappingURL=rocket.js.map