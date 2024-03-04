import {test,expect} from '@playwright/test'

test('should be able send a delete request',async({request}) => {

    //Contruct the data
    const url ='https://jsonplaceholder.typicode.com/posts/1';

    //Send Delete request
    const response = await request.delete(url);

    // console.log(response.status());
    // const bodyJson = await response.json();
    // console.log(bodyJson);

    //Verify the respone
    expect(response.status()).toBe(200);


});