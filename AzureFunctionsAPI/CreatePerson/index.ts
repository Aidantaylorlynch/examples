import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from 'axios';

const urlCreatePerson = process.env['PersonAPIUrl'] + "v1/people";
const urlCreatePersonMission = process.env['MissionAPIUrl'] + "CreatePersonMission?person={id}";
const urlCreatePersonScore = process.env['ScoreAPIUrl'] + "CreatePersonScore?person={id}";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const personId = req.query.person;
    if (!personId) {
        context.res = {
            status: 400
        };
        return;
    }

    await Promise.all([createPerson(personId, context), createPersonMission(personId, context), createPersonScore(personId, context)]);

    context.res = {
        status: 201
    }
};

const createPerson = async (personId: string, context: Context) => {
    try {
        const response = await axios.post(urlCreatePerson, {id: personId});
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

const createPersonMission = async (personId: string, context: Context) => {
    try {
        const response = await axios.post(urlCreatePersonMission.replace("{id}", personId));
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

const createPersonScore = async (personId: string, context: Context) => {
    try {
        const response = await axios.post(urlCreatePersonScore.replace("{id}", personId));
        return response.data;
    } catch (error) {
        context.log(error);
        throw error;
    }
}

export default httpTrigger;
