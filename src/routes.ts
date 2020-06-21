import { Router } from 'https://deno.land/x/oak/mod.ts'

const routes = new Router();

routes.get('/', ({params, response}: {params: any; response: any}) => {
    response.status = 200;
});

export default routes;