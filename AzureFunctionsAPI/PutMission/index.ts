import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";

const urlPutMission = process.env['MissionAPIUrl'] + "v1/mission/{id}";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const missionId = req.params.id;

    const mission = await putMission(missionId, req.body, context);

    context.res = {
        status: 204
    }
};

const putMission = async (missionId: string, mission: any, context: Context) => {
    try {
        const response = await axios.put(urlPutMission.replace("{id}", missionId), mission);
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

export default httpTrigger;
