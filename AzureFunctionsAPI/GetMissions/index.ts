import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import axios from 'axios';

const urlGetMissions = process.env['MissionAPIUrl'] + "GetMissions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const missions = await getMissions(context);

    context.res = {
        body: missions
    };
};

const getMissions = async (context: Context) => {
    try {
        const response = await axios.get(urlGetMissions);
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

export default httpTrigger;
