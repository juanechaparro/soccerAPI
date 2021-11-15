module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'us-cdbr-east-04.cleardb.com',
        user: process.env.MYSQL_USER || 'bb1ce9de92351e',
        password: process.env.MYSQL_PASS || '191e062c',
        database: process.env.MYSQL_DB || 'heroku_082f3d64e681ce8', 
    },
    //mysql://bb1ce9de92351e:191e062c@us-cdbr-east-04.cleardb.com/heroku_082f3d64e681ce8?reconnect=true
}
// host: process.env.MYSQL_HOST || 'b3bdjnj1jknhs75s48af-mysql.services.clever-cloud.com',
// user: process.env.MYSQL_USER || 'u08mq1ek6wfgzr3c',
// password: process.env.MYSQL_PASS || '9qVIFagLqJdDegAfhzoP',
// database: process.env.MYSQL_DB || 'b3bdjnj1jknhs75s48af',

/*host: process.env.MYSQL_HOST || 'us-cdbr-east-04.cleardb.com',
        user: process.env.MYSQL_USER || 'bb1ce9de92351e',
        password: process.env.MYSQL_PASS || '191e062c',
        database: process.env.MYSQL_DB || 'heroku_082f3d64e681ce8', */