import { readBookDataList } from "./fetchQuery.mjs";
import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
    user: "publishuser",
    host: "dpg-cq4bg7eehbks73b984k0-a.oregon-postgres.render.com",
    database: "bookdatadb",
    password: "z9zfjKV073Dxu2WSg9APaFUJlcHZZ36Z",
    port: 5432,
    ssl: true
});
const jsonBookData = await readBookDataList();
const postBookDataList = async () => {
    try {
        // pool.query(`DROP DATABASE IF EXISTS contactdb`, (error, results) => {
        //     if (error) {
        //         throw new Error(error);
        //     }
        // });
        // pool.query(`CREATE DATABASE contactdb${pool.database}`, (error, results) => {
        //     if (error) {
        //         throw new Error(error);
        //     }
        // });
        pool.query(
            "DROP TABLE IF EXISTS bookdata; \
        CREATE TABLE IF NOT EXISTS bookdata (\
        idunique SMALLSERIAL PRIMARY KEY, id VARCHAR(15) NOT NULL, \
        title VARCHAR(200) NOT NULL, authors VARCHAR(200) NOT NULL, \
        image VARCHAR(50) NOT NULL)",
            (error) => {
                if (error) {
                    throw error;
                }
                (async() => {
                  for await (const bookData of await jsonBookData.books) {
                    const { id, title, authors, image } = await bookData;
                    pool.query(
                        "INSERT INTO bookdata (id, title, authors, image) VALUES ($1, $2, $3, $4) RETURNING *", [id, title, authors, image],
                        (error) => {
                            if (error) {
                                throw error;
                            }
                        }
                    );
                }
                })()
            }
        );
        // pool.query("CREATE TABLE IF NOT EXISTS users (ID SERIAL PRIMARY KEY, name VARCHAR(30) NOT NULL, age INT NOT NULL, country VARCHAR(30) NOT NULL, email VARCHAR(30) UNIQUE NOT NULL, phonenumber VARCHAR(20) UNIQUE NOT NULL, comment VARCHAR(100) NOT NULL, termcondition VARCHAR(2))", (error) => {
        //     if (error) {
        //         throw error;
        //     }
        // });
    } catch (error) {
        console.log(error.message);
    }
}
export { postBookDataList };


