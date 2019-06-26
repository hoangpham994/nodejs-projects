const config = {
    port: process.env.PORT || 8080,
    db: 'mongodb://localhost:27017/myblog',
    test_port: 4242,
    test_db: 'mongodb://localhost:27017/myblog_test' 
}

module.exports = config;