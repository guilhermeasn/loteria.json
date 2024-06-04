import axios from "axios";
import { API } from "./fetchdata";

async function test(...urls : string[]) {
    
    for(let url of urls) {
     
        console.log('url', url);

        const request = await axios.get(url, {
            proxy: {
                protocol: 'https',
                host: '20.206.106.192',
                port: 80
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
