//  Aufgabe: Endabgabe Feuerwerk
//  Name: Ann-Kathrin Pfeffer
//  Matrikel: 269354
//  Datum: 12.02.2023
//  Quellen: In Zusammenarbeit mit Vivien Peschke, Cara Brüggendieck und Henning Pils
var firework;
(function (firework) {
    firework.url = "https://webuser.hs-furtwangen.de/~pfeffern/Database/index.php";
    firework.serverRockets = [];
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "rocket");
        if (firework.rocketOne == true) {
            query.set("id", "63e8ca9895665");
        }
        else if (firework.rocketTwo == true) {
            query.set("id", "63e8caba4136c");
        }
        else if (firework.rocketThree == true) {
            query.set("id", "63e8cac2c711c");
        }
        else if (firework.rocketFour == true) {
            query.set("id", "63e8cae1294a2");
        }
        query.set("data", JSON.stringify(json));
        let response = await fetch(firework.url + "?" + query.toString());
        console.log(response);
        let responseText = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }
    firework.sendData = sendData;
    async function getSavedRocket() {
        firework.serverRockets.splice(0, firework.serverRockets.length);
        let response = await fetch(firework.url + "?command=find&collection=rocket");
        let item = await response.text();
        let data = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            firework.serverRockets.push(data["data"][key]);
        }
        console.log(firework.serverRockets);
        let duration = document.getElementById("formDuration");
        let shape = document.getElementById("formShape");
        let color = document.getElementById("formColor");
        if (firework.rocketOne == true) {
            let rocketOneData = firework.serverRockets[0];
            duration.value = rocketOneData.formDuration;
            shape.value = rocketOneData.formShape;
            color.value = rocketOneData.formColor;
            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);
        }
        else if (firework.rocketTwo == true) {
            let rocketTwoData = firework.serverRockets[1];
            duration.value = rocketTwoData.formDuration;
            shape.value = rocketTwoData.formShape;
            color.value = rocketTwoData.formColor;
            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);
        }
        else if (firework.rocketThree == true) {
            let rocketThreeData = firework.serverRockets[2];
            duration.value = rocketThreeData.formDuration;
            shape.value = rocketThreeData.formShape;
            color.value = rocketThreeData.formColor;
            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);
        }
        else if (firework.rocketFour == true) {
            let rocketFourData = firework.serverRockets[3];
            duration.value = rocketFourData.formDuration;
            shape.value = rocketFourData.formShape;
            color.value = rocketFourData.formColor;
            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);
        }
        return firework.serverRockets;
    }
    firework.getSavedRocket = getSavedRocket;
})(firework || (firework = {}));
//# sourceMappingURL=server.js.map