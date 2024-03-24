import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    user: "contactuser",
    host: "localhost",
    database: "contactdb",
    password: "contact",
    port: 5432,
});

try {
    // pool.query(`DROP DATABASE IF EXISTS ${pool.database}`, (error, results) => {
    //     if (error) {
    //         throw new Error(error);
    //     }
    // });
    // pool.query(`CREATE DATABASE IF NOT EXISTS${pool.database}`, (error, results) => {
    //     if (error) {
    //         throw new Error(error);
    //     }
    // });
    pool.query("DROP TABLE IF EXISTS users", (error, results) => {
        if (error) {
            throw new Error(error);
        }
    });
    pool.query("CREATE TABLE IF NOT EXISTS users (ID SERIAL PRIMARY KEY, name VARCHAR(30) NOT NULL, age INT NOT NULL, country VARCHAR(30) NOT NULL, email VARCHAR(30) NOT NULL, phonenumber VARCHAR(20) NOT NULL, comment VARCHAR(100) NOT NULL, termcondition VARCHAR(2)", (error, results) => {
        if (error) {
            throw new Error(error);
        }
    });
}
catch (error) {
    console.log(error.message);
}

const getUser = (req, res) => {
    try {
        pool.query("SELECT * FROM users", (error, results) => {
            if (error) {
                throw new Error(error);
            }
            res.status(200).json(results.rows);
        })
    }
    catch (error) {
        console.log(error.message);
    }
}


const createUser = (req, res) => {
    const { name, age, country, email, phoneNumber, comment, termCondition } = req.body;
    try {
        pool.query(
            "INSERT INTO users (name, age, country, email, phonenumber, comment, termcondition) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [name, age, country, email, phoneNumber, comment, termCondition],
            (error, results) => {
                if (error) {
                    throw new Error(error);
                }
                res.status(201).json(results.rows);
            }
        );
    }
    catch (error) {
        console.log(error.message);
    }
}

const updateUser = (req, res) => {
    const { name, age, country, email, phoneNumber, comment, termCondition } = req.body;
    try {
        pool.query(
            "UPDATE users SET name = $1, age = $2, country = $3, email= $4, phonenumber = $5, comment = $6, termcondition = $7 WHERE name = $1",
            [name, age, country, email, phoneNumber, comment, termCondition],
            (error, results) => {
                if (error) {
                    throw error
                }
                res.status(200).json(results.rows);
            }
        )
    }
    catch (error) {
        console.log(error.message);
    }
}

const deleteUser = (req, res) => {
    try {
        pool.query("DELETE FROM users WHERE name = $1", (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows);
        })
    }
    catch (error) {
        console.log(error.message);
    }
}

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser,
}