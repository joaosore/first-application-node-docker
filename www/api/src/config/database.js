module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  define: {
    timetamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
