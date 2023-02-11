namespace firework {

    window.addEventListener("load", hndLoad);

    export let crc2: CanvasRenderingContext2D;

    

    function hndLoad(_event: Event): void {
        console.log("hndLoad");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.fillStyle = "hsla(273, 79%, 86%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        gameStart();

        document.querySelector("button#saveButton").addEventListener("click", startButtonClick);
    
        document.querySelector("form").addEventListener("change", formChange);
    
    }

    function gameStart(): void {
        console.log("Start");
        showFormEntries();
    }

    function startButtonClick(): void {
        console.log("Save Button");
        showFormEntries();
    }

    function showFormEntries(): void {
        console.log("FormEntries");

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData.entries())
            console.log(entry);

        let formRadius: number = parseInt(formData.get("formRadius").toString());
        console.log(formRadius);

        let formParticles: number = parseInt(formData.get("formParticles").toString());
        console.log(formParticles);

        let formColor: string = formData.get("formColor").toString();
        console.log(formColor);

        let formDuration: number = parseInt(formData.get("formDuration").toString());
        console.log(formDuration);

    }

    function formChange(): void {
        console.log("Form Change");
        showFormEntries();
    }







}