import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts';

class Post extends Model {
    static table = 'posts';
    static timestamps = true;

    static fields = {
        username: { primaryKey: true, type: DataTypes.STRING, length: 20 },
        body: { type: DataTypes.STRING, length: 100 },
        uuid: { type: DataTypes.UUID }
    };
}

export default Post;