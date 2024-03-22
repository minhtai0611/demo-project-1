import bodyParser from "body-parser";
import express from "express";
import fileSystem from "node:fs";

const app = express();
const PORT = 3000;

app.use(express.static("asset"));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

async function FetchBookDataList() {
    try {
        const response = await fetch("https://www.dbooks.org/api/search/literature");
        if (!response.ok) {
            throw new Error("Fail to fetch book data");
        }
        const jsonBookDataList = await response.json();
        return jsonBookDataList;
    }
    catch (error) {
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
    })
}
catch (error) {
    console.log(error.message);
}

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
})

app.listen(PORT, () => console.log(`Server NodeJS + Express is running on port ${PORT}`));
