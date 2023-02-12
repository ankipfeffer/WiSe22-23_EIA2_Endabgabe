var firework_old;
(function (firework_old) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        console.log("hndLoad");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        firework_old.crc2 = canvas.getContext("2d");
        firework_old.crc2.fillStyle = "hsla(273, 79%, 86%, 1)";
        firework_old.crc2.fillRect(0, 0, firework_old.crc2.canvas.width, firework_old.crc2.canvas.height);
        gameStart();
        document.querySelector("button#saveButton").addEventListener("click", startButtonClick);
        document.querySelector("form").addEventListener("change", formChange);
    }
    function gameStart() {
        console.log("Start");
        showFormEntries();
    }
    function startButtonClick() {
        console.log("Save Button");
        showFormEntries();
    }
    function showFormEntries() {
        console.log("FormEntries");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData.entries())
            console.log(entry);
        let formRadius = parseInt(formData.get("formRadius").toString());
        console.log(formRadius);
        let formParticles = parseInt(formData.get("formParticles").toString());
        console.log(formParticles);
        let formColor = formData.get("formColor").toString();
        console.log(formColor);
        let formDuration = parseInt(formData.get("formDuration").toString());
        console.log(formDuration);
    }
    function formChange() {
        console.log("Form Change");
        showFormEntries();
    }
})(firework_old || (firework_old = {}));
//# sourceMappingURL=main.js.map