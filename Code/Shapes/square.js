var firework;
(function (firework) {
    class Square extends firework.Particle {
        constructor(_duration, _color, _position) {
            super(_duration, _color, _position);
            this.draw();
        }
        draw() {
            firework.crc2.save();
            firework.crc2.beginPath();
            firework.crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.radius, 0.5 * this.radius);
            firework.crc2.stroke();
            firework.crc2.fillStyle = this.color;
            if (this.duration < 0) {
                firework.crc2.globalAlpha = this.opacity;
                this.opacity -= 0.5;
            }
            firework.crc2.fill();
            firework.crc2.restore();
        }
    }
    firework.Square = Square;
})(firework || (firework = {}));
//# sourceMappingURL=square.js.map