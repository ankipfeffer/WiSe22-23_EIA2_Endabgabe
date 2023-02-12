//  Aufgabe: Endabgabe Feuerwerk
    //  Name: Ann-Kathrin Pfeffer
    //  Matrikel: 269899
    //  Datum: 12.02.2023
    //  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils

namespace firework {
    export class Particle {
        duration: number;
        color: string;
        position: Vector;
        radius: number;
        opacity: number;
        velocity: Vector;

        constructor(_duration: number, _color: string, _position: Vector) {
            let velocity: Vector = new Vector(Math.random() * getRandomNumber(-30, 30), Math.random() * getRandomNumber(-20, 20));
            this.velocity = velocity;
            this.duration = _duration;
            this.color = _color;
            this.position = new Vector(_position.x, _position.y);
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }

        draw(): void {
            // 
        }

        move(): void {
            let offset: Vector = this.velocity;
            this.position.add(offset);
            this.duration--;
        }
    }

}