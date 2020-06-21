import { Application } from "https://deno.land/x/oak/mod.ts";
import { Database } from 'https://deno.land/x/denodb/mod.ts';
import router from './routes.ts';

const env = Deno.env.toObject()
const PORT = parseInt(env.PORT);

const MONGODB_URI = env.MONGODB_URI;

const db = new Database('mongo', {
    uri: MONGODB_URI,
    database: 'empresas',
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods())

console.log(`🚀🚀🚀 Listening on port ${PORT} 🚀🚀🚀`)
await app.listen({port: PORT});