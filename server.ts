import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();
const port = 8000;

router.get('/', (context) => {
   context.response.body = { message: 'Hello World!' };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server up on http://localhost:${port}`);

await app.listen({ port });
