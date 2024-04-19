import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
    user: "uploaduser",
    host: "localhost",
    database: "uploaddb",
    password: "upload",
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
        imagebook VARCHAR(1000) NOT NULL, termcondition VARCHAR(2))",
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
const getUploadUser = (req, res) => {
    try {
        pool.query(
            "SELECT DISTINCT ON (idbook) * FROM users \
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
const createUploadUser = (req, res, next) => {
    const { idBook, titleBook, authorBook, termCondition } = req.body;
    const imageBook = req.protocol + '://' + req.get('host') + '/image/' + req.file.filename;
    try {
        pool.query(
            "INSERT INTO users (idbook, titlebook, authorbook, imagebook, termcondition) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [idBook, titleBook, authorBook, imageBook, termCondition],
            (error, results) => {
                if (error) {
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    } catch (error) {
        return next(error);
    }
};
const updateUploadUser = (req, res) => {
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
const deleteUploadUser = (req, res) => {
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
    getUploadUser,
    createUploadUser,
    updateUploadUser,
    deleteUploadUser,
};
