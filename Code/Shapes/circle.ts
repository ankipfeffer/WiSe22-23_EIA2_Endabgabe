//  Aufgabe: Endabgabe Feuerwerk
    //  Name: Ann-Kathrin Pfeffer
    //  Matrikel: 269899
    //  Datum: 12.02.2023
    //  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils

namespace firework {
    export class Circle extends Particle {

        constructor(_duration: number, _color: string, _position: Vector) {
            super(_duration, _color, _position);
            this.draw();
        }
        
        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 7 * this.radius / 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            if (this.duration < 0) {
                crc2.globalAlpha = this.opacity;
                this.opacity -= 0.5;
            }
            crc2.fill();
            crc2.restore();
        }

    }

}