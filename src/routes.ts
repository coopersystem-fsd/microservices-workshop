import { Router } from 'https://deno.land/x/oak/mod.ts'

const routes = new Router();

routes.get('/', ({params, response}: {params: any; response: any}) => {
    response.body = {message: 'Hello world!'};
    response.status = 200;
});

export default routes;