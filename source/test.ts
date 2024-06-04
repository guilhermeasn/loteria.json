import axios from "axios";

async function test() {

    const url = 'https://jsonplaceholder.typicode.com/posts/7';
    
    console.log('url', url);

    const request = await axios.get(url);

    console.log('status', request.status);
    console.dir(request.data);

}

test().finally(() => console.log('test end'));
