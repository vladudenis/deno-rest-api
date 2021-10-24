import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.112.0/uuid/mod.ts";
import Post from '../models/Post.ts';

const router = new Router();

// @ts-ignore
router.get('/', async ({ response }: RouterContext) => {
    try{
        const posts = await Post.all();
        response.body = posts;
    }catch(err){
        console.log(err);
        response.body = { error: 'Something went wrong' };
        response.status = 500;
    }
});

// @ts-ignore
router.post('/', async ({ request, response }: RouterContext) => {
    try{
        const { username, body } = await request.body().value;
        const post = await Post.create({ username, body, uuid: crypto.randomUUID() });
        response.body = post;
    }catch(err){
        console.log(err);
        response.body = { error: 'Something went wrong' };
        response.status = 500;
    }
});

export default router;