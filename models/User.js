

const { Pool } = require('pg');

const pool = new Pool();

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    );
    `;
    await pool.query(queryText);
};

const addUser = async (name, email, password) => {
    const queryText = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
    const { rows } = await pool.query(queryText, [name, email, password]);
    return rows[0];
};

module.exports = { createUserTable, addUser };
