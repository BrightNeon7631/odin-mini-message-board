const pool = require('./pool');

async function queryGetAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function queryCreateNewMessage(text, username, added) {
    await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [text, username, added]);
}

module.exports = {
    queryGetAllMessages,
    queryCreateNewMessage
}