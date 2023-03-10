//  Aufgabe: Endabgabe Feuerwerk
//  Name: Ann-Kathrin Pfeffer
//  Matrikel: 269354
//  Datum: 12.02.2023
//  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils
var firework;
(function (firework) {
    let duration;
    let shape;
    let color;
    let rocket = [];
    firework.rocketOne = true;
    firework.rocketTwo = false;
    firework.rocketThree = false;
    firework.rocketFour = false;
    window.addEventListener("load", hndLoad);
    async function hndLoad(_event) {
        console.log("hndLoad");
        firework.canvas = document.querySelector("canvas");
        if (!firework.canvas)
            return;
        firework.crc2 = firework.canvas.getContext("2d");
        firework.crc2.canvas.width = window.innerWidth * 0.7;
        firework.crc2.canvas.height = window.innerHeight * 0.7;
        document.querySelector("canvas").addEventListener("click", canvasClick);
        document.querySelector("button#saveButton").addEventListener("click", saveButtonClick);
        document.getElementById("rocketOne").addEventListener("click", rocketButtonClick);
        document.getElementById("rocketTwo").addEventListener("click", rocketButtonClick);
        document.getElementById("rocketThree").addEventListener("click", rocketButtonClick);
        document.getElementById("rocketFour").addEventListener("click", rocketButtonClick);
        firework.getSavedRocket();
        window.setInterval(update, 20);
    }
    function canvasClick(_event) {
        let rect = firework.canvas.getBoundingClientRect();
        let mousePositionX = _event.clientX - rect.left - 10;
        let mousePositionY = _event.clientY - rect.top - 10;
        console.log(mousePositionX, mousePositionY);
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            duration = Number(formData.get("formDuration"));
            shape = String(formData.get("formShape"));
            color = String(formData.get("formColor"));
            console.log(entry);
        }
        let rocketPosition = new firework.Vector(mousePositionX, mousePositionY);
        let newRocket = new firework.Rocket(duration, shape, color, rocketPosition);
        console.log(newRocket);
        rocket.push(newRocket);
        console.log(rocket);
        console.log(duration, shape, color);
    }
    function update() {
        firework.crc2.clearRect(0, 0, firework.canvas.width, firework.canvas.height);
        if (rocket.length > 0) {
            for (let i = 0; i < rocket.length; i++) {
                if (rocket[i].particles.length != 0) {
                    rocket[i].draw();
                }
                else {
                    rocket.splice(i, 1);
                }
            }
        }
    }
    async function saveButtonClick(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            duration = Number(formData.get("formDuration"));
            shape = String(formData.get("formShape"));
            color = String(formData.get("formColor"));
            console.log(entry);
        }
        firework.sendData(formData);
    }
    firework.saveButtonClick = saveButtonClick;
    function getRandomNumber(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }
    firework.getRandomNumber = getRandomNumber;
    function rocketButtonClick(_event) {
        let eventTarget = _event.target;
        let rocketDivOne = document.getElementById("rocketOne");
        let rocketImageOne = document.getElementById("rocketImageOne");
        let rocketDivTwo = document.getElementById("rocketTwo");
        let rocketImageTwo = document.getElementById("rocketImageTwo");
        let rocketDivThree = document.getElementById("rocketThree");
        let rocketImageThree = document.getElementById("rocketImageThree");
        let rocketDivFour = document.getElementById("rocketFour");
        let rocketImageFour = document.getElementById("rocketImageFour");
        if (eventTarget == rocketDivOne || eventTarget == rocketImageOne) {
            firework.rocketOne = true;
            firework.rocketTwo = false;
            firework.rocketThree = false;
            firework.rocketFour = false;
        }
        else if (eventTarget == rocketDivTwo || eventTarget == rocketImageTwo) {
            firework.rocketOne = false;
            firework.rocketTwo = true;
            firework.rocketThree = false;
            firework.rocketFour = false;
        }
        else if (eventTarget == rocketDivThree || eventTarget == rocketImageThree) {
            firework.rocketOne = false;
            firework.rocketTwo = false;
            firework.rocketThree = true;
            firework.rocketFour = false;
        }
        else if (eventTarget == rocketDivFour || eventTarget == rocketImageFour) {
            firework.rocketOne = false;
            firework.rocketTwo = false;
            firework.rocketThree = false;
            firework.rocketFour = true;
        }
        if (firework.rocketOne == true) {
            rocketDivOne.style.backgroundColor = "#8348EC";
            rocketDivTwo.style.backgroundColor = "#B995F9";
            rocketDivThree.style.backgroundColor = "#B995F9";
            rocketDivFour.style.backgroundColor = "#B995F9";
            firework.rocketTwo = false;
            firework.rocketThree = false;
            firework.rocketFour = false;
        }
        else if (firework.rocketTwo == true) {
            rocketDivOne.style.backgroundColor = "#B995F9";
            rocketDivTwo.style.backgroundColor = "#8348EC";
            rocketDivThree.style.backgroundColor = "#B995F9";
            rocketDivFour.style.backgroundColor = "#B995F9";
            firework.rocketOne = false;
            firework.rocketThree = false;
            firework.rocketFour = false;
        }
        else if (firework.rocketThree == true) {
            rocketDivOne.style.backgroundColor = "#B995F9";
            rocketDivTwo.style.backgroundColor = "#B995F9";
            rocketDivThree.style.backgroundColor = "#8348EC";
            rocketDivFour.style.backgroundColor = "#B995F9";
            firework.rocketOne = false;
            firework.rocketTwo = false;
            firework.rocketFour = false;
        }
        else if (firework.rocketFour == true) {
            rocketDivOne.style.backgroundColor = "#B995F9";
            rocketDivTwo.style.backgroundColor = "#B995F9";
            rocketDivThree.style.backgroundColor = "#B995F9";
            rocketDivFour.style.backgroundColor = "#8348EC";
            firework.rocketOne = false;
            firework.rocketTwo = false;
            firework.rocketThree = false;
        }
        firework.getSavedRocket();
    }
})(firework || (firework = {}));
//# sourceMappingURL=main.js.map