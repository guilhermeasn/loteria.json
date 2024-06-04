import { API } from "./fetchdata";

async function test(...urls : string[]) {
    
    for(let url of urls) {
     
        console.log('url', url);

        const request = await fetch(url);

        console.log('status', request.status);
        console.dir(await request.json());

    }

}

test(
    'https://jsonplaceholder.typicode.com/posts/7',
    API + '/megasena'
).finally(() => console.log('test end'));
