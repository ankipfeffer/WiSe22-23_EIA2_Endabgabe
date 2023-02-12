namespace firework {



    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let duration: number;
    let shape: string;
    let color: string;
    let radius: number;
    let opacity: number;
    let velocity: Vector;
    let rocket: Rocket[] = [];
    let particle: Particle;

    export let rocketOne: boolean = true;
    export let rocketTwo: boolean = false;
    export let rocketThree: boolean = false;
    export let rocketFour: boolean = false;


    window.addEventListener("load", hndLoad);


    async function hndLoad(_event: Event): Promise<void> {
        console.log("hndLoad");

        canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.canvas.width = window.innerWidth * 0.6;
        crc2.canvas.height = window.innerHeight * 0.6;


        document.querySelector("canvas").addEventListener("click", canvasClick);
        document.querySelector("button#saveButton").addEventListener("click", saveButtonClick);
        document.getElementById("rocketOne").addEventListener("click", rocketButtonClick);
        document.getElementById("rocketTwo").addEventListener("click", rocketButtonClick);
        document.getElementById("rocketThree").addEventListener("click", rocketButtonClick);
        document.getElementById("rocketFour").addEventListener("click", rocketButtonClick);

        window.setInterval(update, 20);

    }

    function canvasClick(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();

        let mousePositionX: number = _event.clientX - rect.left - 110;
        let mousePositionY: number = _event.clientY - rect.top - 60;

        console.log(mousePositionX, mousePositionY);

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            duration = Number(formData.get("formDuration"));
            shape = String(formData.get("formShape"));
            color = String(formData.get("formColor"));

            console.log(entry);
        }

        let rocketPosition: Vector = new Vector(mousePositionX, mousePositionY);
        let newRocket: Rocket = new Rocket(duration, shape, color, rocketPosition);
        console.log(newRocket);
        rocket.push(newRocket);

        console.log(rocket);

        console.log(duration, shape, color);
    }


    function update(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        if (rocket.length > 0) {
            for (let i: number = 0; i < rocket.length; i++) {
                if (rocket[i].particles.length != 0) {
                    rocket[i].draw();
                } else {
                    rocket.splice(i, 1);
                }
            }
        }
    }


    export async function saveButtonClick(_addend: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            duration = Number(formData.get("formDuration"));
            shape = String(formData.get("formShape"));
            color = String(formData.get("formColor"));

            console.log(entry);
        }
        // sendData(formData);
    }


    export function getRandomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }


    function rocketButtonClick(_event: MouseEvent): void {
        let eventTarget: EventTarget = _event.target;
        let rocketDivOne: HTMLDivElement = <HTMLDivElement>document.getElementById("rocketOne");
        let rocketDivTwo: HTMLDivElement = <HTMLDivElement>document.getElementById("rocketTwo");
        let rocketDivThree: HTMLDivElement = <HTMLDivElement>document.getElementById("rocketThree");
        let rocketDivFour: HTMLDivElement = <HTMLDivElement>document.getElementById("rocketFour");

        if (eventTarget == rocketDivOne) {
            rocketOne = true;
            rocketTwo = false;
            rocketThree = false;
            rocketFour = false;
        } else if (eventTarget == rocketDivTwo) {
            rocketOne = false;
            rocketTwo = true;
            rocketThree = false;
            rocketFour = false;
        } else if (eventTarget == rocketDivThree) {
            rocketOne = false;
            rocketTwo = false;
            rocketThree = true;
            rocketFour = false;
        } else if (eventTarget == rocketDivFour) {
            rocketOne = false;
            rocketTwo = false;
            rocketThree = false;
            rocketFour = true;
        }

        if (rocketOne == true) {
            rocketDivOne.style.backgroundColor = "#8348EC";
            rocketDivTwo.style.backgroundColor = "#B995F9";
            rocketDivThree.style.backgroundColor = "#B995F9";
            rocketDivFour.style.backgroundColor = "#B995F9";

            rocketTwo = false;
            rocketThree = false;
            rocketFour = false;

        } else if (rocketTwo == true) {
            rocketDivOne.style.backgroundColor = "#B995F9";
            rocketDivTwo.style.backgroundColor = "#8348EC";
            rocketDivThree.style.backgroundColor = "#B995F9";
            rocketDivFour.style.backgroundColor = "#B995F9";

            rocketOne = false;
            rocketThree = false;
            rocketFour = false;

        } else if (rocketThree == true) {
            rocketDivOne.style.backgroundColor = "#B995F9";
            rocketDivTwo.style.backgroundColor = "#B995F9";
            rocketDivThree.style.backgroundColor = "#8348EC";
            rocketDivFour.style.backgroundColor = "#B995F9";

            rocketOne = false;
            rocketTwo = false;
            rocketFour = false;

        } else if (rocketFour == true) {
            rocketDivOne.style.backgroundColor = "#B995F9";
            rocketDivTwo.style.backgroundColor = "#B995F9";
            rocketDivThree.style.backgroundColor = "#B995F9";
            rocketDivFour.style.backgroundColor = "#8348EC";

            rocketOne = false;
            rocketTwo = false;
            rocketThree = false;
        }

        // getSavedRocket();

    }

}