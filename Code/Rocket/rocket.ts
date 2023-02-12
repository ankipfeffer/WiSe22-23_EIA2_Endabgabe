namespace firework {
    export class Rocket {

        duration: number;
        shape: string;
        color: string;
        position: Vector;
        particles: Particle[] = [];

        constructor(_duration: number, _shape: string, _color: string, _position: Vector) {
            this.duration = _duration;
            this.shape = _shape;
            this.color = _color;
            this.position = _position;
            this.explode();
        }

        explode(): void {
            for (let i: number = 0; i < 30; i++) {
                // Kreis oder Viereck
                switch (this.shape) {
                    case "circle":
                        this.particles.push(new Circle(this.duration, this.color, this.position));
                        break;
                    case "square":
                        this.particles.push(new Square(this.duration, this.color, this.position));
                        break;
                }
            }
        }
        
        draw(): void {
            for (let i: number = 0; i < this.particles.length; i++) {
                this.particles[i].move();
                this.particles[i].draw();
                if (this.particles[i].duration <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }

    }
}