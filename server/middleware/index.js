import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  event.context.db = await mysql.createConnection({
    host: 'svc.sel3.cloudtype.app',
    user: 'root',
    password: '1111',
    port: 31516,
    database: 'test',
  });
});
