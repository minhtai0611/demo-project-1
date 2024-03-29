import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
    user: "publishuser",
    host: "localhost",
    database: "publishdb",
    password: "publish",
    port: 5432,
});
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
        "DROP TABLE IF EXISTS users; \
        CREATE TABLE IF NOT EXISTS users (\
        id SMALLSERIAL PRIMARY KEY, idbook VARCHAR(10) NOT NULL, \
        titlebook VARCHAR(20) NOT NULL, authorbook VARCHAR(20) NOT NULL, \
        imagebook VARCHAR(100) NOT NULL, termcondition VARCHAR(2))",
        (error) => {
            if (error) {
                throw error;
            }
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
const getPublishUser = (req, res) => {
    try {
        pool.query(
            "SELECT DISTINCT ON (idbook) idbook, titlebook, \
        authorbook, imagebook, termcondition FROM users \
        ORDER BY idbook, id DESC",
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};
const createPublishUser = (req, res) => {
    const { idbook, titlebook, authorbook, imagebook, termcondition } = req.body;
    try {
        pool.query(
            "INSERT INTO users (idbook, titlebook, authorbook, imagebook, termcondition) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [idbook, titlebook, authorbook, imagebook, termcondition],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};
const updatePublishUser = (req, res) => {
    const { idBook, titleBook, authorBook, imageBook, termCondition } = req.body;
    try {
        pool.query(
            "UPDATE users SET titlebook = $2, authorbook = $3, imagebook = $4, termcondition = $5 WHERE idbook = $1 RETURNING *",
            [idBook, titleBook, authorBook, imageBook, termCondition],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};
const deletePublishUser = (req, res) => {
    const { idbook } = req.body;
    try {
        pool.query(
            "DELETE FROM users WHERE idbook = $1 RETURNING *",
            [idbook],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};
export default {
    getPublishUser,
    createPublishUser,
    updatePublishUser,
    deletePublishUser,
};
