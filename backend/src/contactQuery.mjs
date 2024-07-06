import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
    user: "publishuser",
    host: "dpg-cq4bg7eehbks73b984k0-a.oregon-postgres.render.com",
    database: "contactdb",
    password: "z9zfjKV073Dxu2WSg9APaFUJlcHZZ36Z",
    port: 5432,
    ssl: true
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
        name VARCHAR(30) NOT NULL, \
        age SMALLINT NOT NULL, country VARCHAR(30) NOT NULL, \
        email VARCHAR(30) NOT NULL, phonenumber VARCHAR(20) NOT NULL, \
        comment VARCHAR(100) NOT NULL, termcondition VARCHAR(2))",
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
const getContactUser = (req, res) => {
    try {
        pool.query("SELECT * FROM users", (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    } catch (error) {
        console.log(error.message);
    }
};
const createContactUser = (req, res) => {
    const { name, age, country, email, phoneNumber, comment, termCondition } =
        req.body;
    try {
        pool.query(
            "INSERT INTO users (name, age, country, email, phonenumber, comment, termcondition) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [name, age, country, email, phoneNumber, comment, termCondition],
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
const updateContactUser = (req, res) => {
    const { name, age, country, email, phoneNumber, comment, termCondition } =
        req.body;
    try {
        pool.query(
            "UPDATE users SET name = $1, age = $2, country = $3, email = $4, phonenumber = $5, comment = $6, termcondition = $7 WHERE name = $1 RETURNING *",
            [name, age, country, email, phoneNumber, comment, termCondition],
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
const deleteContactUser = (req, res) => {
    try {
        pool.query("DELETE FROM users WHERE name = $1 RETURNING *", (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    } catch (error) {
        console.log(error.message);
    }
};
export default {
    getContactUser,
    createContactUser,
    updateContactUser,
    deleteContactUser,
};
