/* eslint-disable no-unused-vars */
import bodyParser from "body-parser";
import express from "express";
import process from "node:process";
import contactQuery from "./contactQuery.mjs";
import uploadQuery from "./uploadQuery.mjs";
import wishlistQuery from "./wishlistQuery.mjs";
import publishQuery from "./publishQuery.mjs";
import { postBookDataList } from "./dataQuery.mjs";
import cors from "cors";
import helmet from "helmet";
import { fetchBookDataList, writeBookDataList, readBookDataList } from "./fetchQuery.mjs";
import multer from "multer";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import fileSystem from "node:fs";
import crypto from "crypto";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const filePath = `../image/`;
        if (!fileSystem.existsSync(path.join(__dirname, filePath))) {
            fileSystem.mkdirSync(path.join(__dirname, filePath));
        }
        cb(null, `image`);
    },
    filename: (req, file, cb) => {
        cb(null, crypto.randomBytes(12).toString("hex") + "-" + file.originalname);
    }
});
// const multerFilter = (req, file, cb) => {
//     if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
//         cb(null, true);
//     }
//     else {
//         cb(null, false);
//     }
// }
const functionUploadImageFile = multer({ storage: multerStorage });

const corsOptions = {
  origin: 'https://demo-project-1-six.vercel.app',
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "../asset")));
app.use("/image", express.static(path.join(__dirname, "../image")));
app.use(functionUploadImageFile.single("imageBook"));
app.use(helmet());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });

const jsonBookDataList = await fetchBookDataList();
await writeBookDataList(jsonBookDataList);
await postBookDataList();

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
