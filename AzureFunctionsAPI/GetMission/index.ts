import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";

const urlGetMission = process.env['MissionAPIUrl'] + "v1/mission/{id}";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const missionId = req.params.id;
    
    const mission = await getMission(missionId, context);

    context.res = {
        body: mission
    };
};

const getMission = async (missionId: string, context: Context) => {
    try {
        const response = await axios.get(urlGetMission.replace("{id}", missionId));
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

export default httpTrigger;
