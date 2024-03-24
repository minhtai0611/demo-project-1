import bodyParser from "body-parser";
import express from "express";
import fileSystem from "node:fs";
import process from "node:process";
import contactQuery from "./contactQuery.mjs";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
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

async function FetchBookDataList() {
    try {
        const response = await fetch(
            "https://www.dbooks.org/api/search/literature"
        );
        if (!response.ok) {
            throw new Error("Fail to fetch book data");
        }
        const jsonBookDataList = await response.json();
        return jsonBookDataList;
    } catch (error) {
        console.log(error.message || "Could not to fetch book data");
    }
}
const jsonBookDataList = await FetchBookDataList();
try {
    const writeStream = fileSystem.createWriteStream("./asset/bookDataList.json");
    writeStream.write(JSON.stringify(jsonBookDataList), (error) => {
        if (error) {
            throw new Error("Fail to write data to JSON file");
        }
    });
} catch (error) {
    console.log(error.message);
}

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
    const readStream = fileSystem.createReadStream("./asset/bookDataList.json");
    let chunkStream = "";
    for await (const chunk of readStream) {
        chunkStream += chunk;
        console.log(chunk);
    }
    const jsonData = await JSON.parse(chunkStream);
    res.status(200).json(jsonData);
});

// app.post("/contact", (req, res) => {
//     // try {
//     //     const writeStream = fileSystem.createWriteStream("./asset/userContact.json");
//     //     writeStream.write(JSON.stringify(req.body), (error) => {
//     //         if (error) {
//     //             throw new Error("Fail to write data to JSON file");
//     //         }
//     //     })
//     // }
//     // catch (error) {
//     //     console.log(error.message);
//     // }
//     const { name, age, country, email, phoneNumber, comment, termCondition } =
//         req.body;
//     try {
//         pool.query(
//             "INSERT INTO users (name, age, country, email, phonenumber, comment, termcondition) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
//             [name, age, country, email, phoneNumber, comment, termCondition],
//             (error, results) => {
//                 if (error) {
//                     throw new Error(error);
//                 }
//                 res.status(201).json(`User added with id: ${results.rows[0].id} `);
//             }
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// });
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
