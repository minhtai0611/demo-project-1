/* eslint-disable no-unused-vars */
import bodyParser from "body-parser";
import express from "express";
import process from "node:process";
import contactQuery from "./contactQuery.mjs";
import uploadQuery from "./uploadQuery.mjs";
import wishlistQuery from "./wishlistQuery.mjs";
import publishQuery from "./publishQuery.mjs";
import cors from "cors";
import helmet from "helmet";
import { fetchBookDataList, writeBookDataList, readBookDataList } from "./fetchQuery.mjs";

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

app.get("/api", async (req, res) => {
    // const readStream = await fileSystemPromise.readFile("./asset/bookDataList.json");
    // const jsonData = await JSON.parse(readStream);
    // res.status(200).json(jsonData);
    const jsonData = await readBookDataList();
    res.status(200).json(await jsonData);
});

app.get('/contact', contactQuery.getContactUser);
app.post('/contact', contactQuery.createContactUser);
app.put('/contact', contactQuery.updateContactUser);
app.delete('/contact', contactQuery.deleteContactUser);

app.get('/upload', uploadQuery.getUploadUser);
app.post('/upload', uploadQuery.createUploadUser);
app.put('/upload', uploadQuery.updateUploadUser);
app.delete('/upload', uploadQuery.deleteUploadUser);

app.get('/wishlist', wishlistQuery.getWishlistUser);
app.post('/wishlist', wishlistQuery.createWishlistUser);
app.put('/wishlist', wishlistQuery.updateWishlistUser);
app.delete('/wishlist', wishlistQuery.deleteWishlistUser);

app.get('/publish', publishQuery.getPublishUser);
app.post('/publish', publishQuery.createPublishUser);
app.put('/publish', publishQuery.updatePublishUser);
app.delete('/publish', publishQuery.deletePublishUser);

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
