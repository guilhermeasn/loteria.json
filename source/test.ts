import axios from "axios";
import { Agent } from "https";
import { API } from "./fetchdata";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

async function test(...urls : string[]) {
    
    for(let url of urls) {
     
        console.log('url', url);

        const request = await axios.get(url, {
            httpAgent: new Agent({ keepAlive: true }),
            headers: {
                Host: url.replace(/^(https?:\/\/)?([\w\.]+).*/, '$2'),
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        });

        console.log('status', request.status);
        console.dir(request.data);

    }

}

test(
    'https://jsonplaceholder.typicode.com/posts/7',
    API + '/megasena'
).finally(() => console.log('test end'));
