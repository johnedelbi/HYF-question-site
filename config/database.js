// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('PGHOST', '127.0.0.1'),
//       port: env.int('PGPORT', 5432),
//       database: env('PGDATABASE', 'strapi'),
//       user: env('PGUSER', 'strapi'),
//       password: env('PGPASSWORD', 'password'),
//       ssl: env.bool(true),
//     },
//   },
// });

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
