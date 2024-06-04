import axios from "axios";
import { Agent } from "https";
import { API } from "./fetchdata";

async function test(...urls : string[]) {
    
    for(let url of urls) {
     
        console.log('url', url);

        const request = await axios.get(url, {
            httpsAgent: new Agent({ keepAlive: true }),
        });

        console.log('status', request.status);
        console.dir(request.data);

    }

}

test(
    'https://jsonplaceholder.typicode.com/posts/7',
    API + '/megasena'
).finally(() => console.log('test end'));
