//  Aufgabe: Endabgabe Feuerwerk
//  Name: Ann-Kathrin Pfeffer
//  Matrikel: 269354
//  Datum: 12.02.2023
//  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils
var firework;
(function (firework) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    firework.Vector = Vector;
})(firework || (firework = {}));
//# sourceMappingURL=vector.js.map