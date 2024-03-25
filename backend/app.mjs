import bodyParser from "body-parser";
import express from "express";
import process from "node:process";
import contactQuery from "./contactQuery.mjs";
import cors from "cors";
import helmet from "helmet";
import { fetchBookDataList, writeBookDataList, readBookDataList } from "./fetchBookData.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("asset"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

const jsonBookDataList = await fetchBookDataList();
writeBookDataList(jsonBookDataList);

app.get('/', (req, res) => {
    res.status(200).send("NodeJS + Express + PostgreSQL");
})

app.get('/contact', contactQuery.getUser);
app.post('/contact', contactQuery.createUser);
app.put('/contact', contactQuery.updateUser);
app.delete('/contact', contactQuery.deleteUser);

app.get("/api", async (req, res) => {
    // const readStream = await fileSystemPromise.readFile("./asset/bookDataList.json");
    // const jsonData = await JSON.parse(readStream);
    // res.status(200).json(jsonData);
    const jsonData = await readBookDataList();
    res.status(200).json(await jsonData);
});

app.use((req, res, next) => {
    const error = new Error('Unexpectable error got occured');
    next(error);
});
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Server encountered an unexpected edition and got error');
});

app.listen(PORT, () =>
    console.log(`Server NodeJS + Express + PostgreSQL is running on port ${PORT}`)
);
