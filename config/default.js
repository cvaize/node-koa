module.exports = {
    // secret data can be moved to env variables
    // or a separate config
    port: 3000,
    secret: 'mysecret',
    root: process.cwd(),
    dbUrl: 'mongodb://127.0.0.1:27017'
};
