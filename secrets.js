module.exports = {
    jwtSecret: process.env.JWT_SECRET || `HdE64Jui854Sawf4yHBD543hEwg45tgbUdfbH4563`,
    PORT: process.env.PORT || 3333,
    env: process.env.DB_ENV || 'development'

}