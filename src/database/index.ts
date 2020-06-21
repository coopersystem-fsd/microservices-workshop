import {Database, Model} from 'https://deno.land/x/denodb/mod.ts';
import {walk} from "https://deno.land/std/fs/walk.ts";

const env = Deno.env.toObject()
let db;

if (env.MONGODB_URI) {
    db = new Database('mongo', {
        uri: env.MONGODB_URI,
        database: 'empresas'
    });
} else {
    db = new Database('mongo', {
        uri: env.MONGODB_URL,
        username: env.MONGODB_USER,
        password: env.MONGODB_PASS,
        database: 'empresas'
    });
}

const getModels = async (path: string): Promise<typeof Model[]> => {
    const models: typeof Model[] = [];

    for await (const file of walk(path)) {
        if (file.isFile) {
            const module = await import(`./${file.path}`);
            models.push(module.default);
        }
    }

    return Promise.resolve(models);
};

db.link(await getModels("./models"));

export default db;