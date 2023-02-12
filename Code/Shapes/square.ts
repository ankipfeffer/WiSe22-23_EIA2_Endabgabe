//  Aufgabe: Endabgabe Feuerwerk
    //  Name: Ann-Kathrin Pfeffer
    //  Matrikel: 269899
    //  Datum: 12.02.2023
    //  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils

namespace firework {
    export class Square extends Particle {

        constructor(_duration: number, _color: string, _position: Vector) {
            super(_duration, _color, _position);
            this.draw();
        }
        
        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.radius, 0.5 * this.radius);
            crc2.stroke();
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