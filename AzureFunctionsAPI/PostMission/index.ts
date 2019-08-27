import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";

const urlPostMission = process.env['MissionAPIUrl'] + "v1/mission";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const mission = await postMission(req.body, context);

    context.res = {
        status: 201,
        body: mission
    }
};

const postMission = async (mission: any, context: Context) => {
    try {
        const response = await axios.post(urlPostMission, mission);
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

export default httpTrigger;
