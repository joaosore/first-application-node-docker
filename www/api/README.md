# portaldoaluno-backend


Configuração de DB

app/config/database.js

```
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timetamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```
