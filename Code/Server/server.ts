namespace firework {

    export let url: string = "https://webuser.hs-furtwangen.de/~pfeffern/Database/index.php";
    export let serverRockets: RocketData[] = [];
    export interface RocketData {
        formDuration: string;
        formShape: string;
        formColor: string;
    }

    export async function sendData(_formData: FormData): Promise<void> {

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
        }
        let json: FormDataJSON = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values: FormDataEntryValue[] = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }

        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "rocket");

        if (rocketOne == true) {
            query.set("id", "63e8ca9895665");
        } else if (rocketTwo == true) {
            query.set("id", "63e8caba4136c");
        } else if (rocketThree == true) {
            query.set("id", "63e8cac2c711c");
        } else if (rocketFour == true) {
            query.set("id", "63e8cae1294a2");
        }

        query.set("data", JSON.stringify(json));

        let response: Response = await fetch(url + "?" + query.toString());
        console.log(response);
        let responseText: string = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }



    export async function getSavedRocket(): Promise<any> {

        serverRockets.splice(0, serverRockets.length);


        let response: Response = await fetch(url + "?command=find&collection=rocket");
        let item: string = await response.text();
        let data: any = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            serverRockets.push(data["data"][key]);
        }
        console.log(serverRockets);

        let duration: HTMLInputElement = <HTMLInputElement>document.getElementById("formDuration");
        let shape: HTMLInputElement = <HTMLInputElement>document.getElementById("formShape");
        let color: HTMLInputElement = <HTMLInputElement>document.getElementById("formColor");


        if (rocketOne == true) {
            let rocketOneData: RocketData = serverRockets[0];

            duration.value = rocketOneData.formDuration;
   
            shape.value = rocketOneData.formShape;
            

            color.value = rocketOneData.formColor;

            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);


        } else if (rocketTwo == true) {
            let rocketTwoData: RocketData = serverRockets[1];

            duration.value = rocketTwoData.formDuration;
            shape.value = rocketTwoData.formShape;
            color.value = rocketTwoData.formColor;

            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);

        } else if (rocketThree == true) {
            let rocketThreeData: RocketData = serverRockets[2];

            duration.value = rocketThreeData.formDuration;
            shape.value = rocketThreeData.formShape;
            color.value = rocketThreeData.formColor;

            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);

        } else if (rocketFour == true) {
            let rocketFourData: RocketData = serverRockets[3];

            duration.value = rocketFourData.formDuration;
            shape.value = rocketFourData.formShape;
            color.value = rocketFourData.formColor;

            console.log(duration.value);
            console.log(shape.value);
            console.log(color.value);

        }

        return serverRockets;



    }



}