namespace firework {

    export let url: string = "https://webuser.hs-furtwangen.de/~pfeffern/Database/index.php";
    export let serverRockets: RocketData[] = [];
    export interface RocketData {
        duration: number;
        shape: string;
        color: string;
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

            // let test: any = data.data[key];
        }
        console.log(serverRockets);

        if (rocketOne == true) {
            let rocketOneData: RocketData = serverRockets[0];
            console.log(rocketOneData.duration);
            console.log(rocketOneData[0]);

        } else if (rocketTwo == true) {
            let rocketTwoData: RocketData = serverRockets[1];
            console.log(rocketTwoData);

        } else if (rocketThree == true) {
            let rocketThreeData: RocketData = serverRockets[2];
            console.log(rocketThreeData);

        } else if (rocketFour == true) {
            let rocketFourData: RocketData = serverRockets[3];
            console.log(rocketFourData);

        }

        return serverRockets;

        

    }



}