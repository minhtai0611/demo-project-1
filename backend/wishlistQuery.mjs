import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
    user: "wishlistuser",
    host: "localhost",
    database: "wishlistdb",
    password: "wishlist",
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
        idunique SMALLSERIAL PRIMARY KEY, id VARCHAR(15) NOT NULL, \
        title VARCHAR(100) NOT NULL, authors VARCHAR(100) NOT NULL, \
        image VARCHAR(100) NOT NULL)",
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
const getWishlistUser = (req, res) => {
    try {
        pool.query("SELECT DISTINCT ON (id) id, title, \
        authors, image FROM users \
        ORDER BY id, idunique DESC", (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    } catch (error) {
        console.log(error.message);
    }
};
const createWishlistUser = (req, res) => {
    const { id, title, authors, image } = req.body;
    try {
        pool.query(
            "INSERT INTO users (id, title, authors, image) VALUES ($1, $2, $3, $4) RETURNING *",
            [id, title, authors, image],
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
const updateWishlistUser = (req, res) => {
    const { id, title, authors, image } = req.body;
    try {
        pool.query(
            "UPDATE users SET title = $2, authors = $3, image = $4 WHERE id = $1 RETURNING *",
            [id, title, authors, image],
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
const deleteWishlistUser = (req, res) => {
    const { id } = req.body;
    try {
        pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [id],
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
    getWishlistUser,
    createWishlistUser,
    updateWishlistUser,
    deleteWishlistUser,
};
