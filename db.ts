import { Database, MySQLConnector } from 'https://deno.land/x/denodb/mod.ts';
import Post from './models/Post.ts';

const connector = new MySQLConnector({
    database: 'deno_rest_api',
    host: 'localhost',
    username: 'root',
    password: 'ezezez',
    port: 3306, // optional
});

const db = new Database(connector);
db.link([Post]);

export default db;