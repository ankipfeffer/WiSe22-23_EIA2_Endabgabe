//  Aufgabe: Endabgabe Feuerwerk
    //  Name: Ann-Kathrin Pfeffer
    //  Matrikel: 269899
    //  Datum: 12.02.2023
    //  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils
    
namespace firework {

    export class Vector {
        x: number;
        y: number;

        constructor (_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }

}