import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import axios from 'axios';

const urlGetMissingADPeople = process.env['PersonAPIUrl'] + "GetMissingADPeople";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const missingADPeople = await getMissingADPeople(context);

    context.res = {
        body: missingADPeople
    };
};

const getMissingADPeople = async (context: Context) => {
    try {
        const response = await axios.get(urlGetMissingADPeople);
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

export default httpTrigger;
