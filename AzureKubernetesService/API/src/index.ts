import express from 'express';

const app = express();

const port = 80;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("This route is working");
});

app.listen(port, () => {
    console.log("app is listening on port", port);
});