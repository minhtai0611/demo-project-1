import fileSystem from "node:fs";
export async function fetchBookDataList() {
    try {
        const arrayTopic = [
            "computer-science",
            "science-and-mathematics",
            "economics-and-finance",
            "business-and-management",
            "politics-and-government",
            "history",
            "philosophy",
        ];
        const jsonTopicList = [];
        let jsonTopicListFinal = null;
        for await (const topic of arrayTopic) {
            const response = await fetch(
                `https://www.dbooks.org/api/search/${topic} `
            );
            if (!response.ok) {
                throw new Error("Fail to fetch book data");
            }
            const jsonBookDataList = await response.json();
            jsonTopicList.push(await jsonBookDataList);
            const jsonTopicCombine = await jsonTopicList.reduce(
                (prevJsonBookDataList, currentJsonBookDataList) => {
                    prevJsonBookDataList.total += currentJsonBookDataList.total;
                    prevJsonBookDataList.books = prevJsonBookDataList.books.concat(
                        currentJsonBookDataList.books
                    );
                    return prevJsonBookDataList;
                },
                { status: "ok", total: 0, books: [] }
            );
            jsonTopicListFinal = await jsonTopicCombine;
        }
        return await jsonTopicListFinal;
    } catch (error) {
        console.log(error.message || "Could not to fetch book data");
    }
}
export async function writeBookDataList(jsonBookDataList) {
    try {
        const writeStream = fileSystem.createWriteStream(
            "./asset/bookDataList.json"
        );
        writeStream.write(JSON.stringify(await jsonBookDataList), (error) => {
            if (error) {
                throw new Error("Fail to write data to JSON file");
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}
export async function readBookDataList() {
    try {
        const readStream = fileSystem.createReadStream("./asset/bookDataList.json");
        let chunkStream = "";
        for await (const chunk of readStream) {
            chunkStream += chunk;
        }
        const jsonData = await JSON.parse(chunkStream);
        return jsonData;
    } catch (error) {
        console.log(error.message);
    }
}
