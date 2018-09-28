
exports.DbConnction= function () {
    debugger;
    const { Client } = require('pg');
    const connectionString = 'postgresql://postgres:12122@localhost:5432/UserProfile';
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'UserProfile',
        password: '12122',
        port: 5432,
        connectionString: connectionString
    });
    client.connect().then(
        () => {
            console.log('Database Connected from config');
        });
    return client;
}