import {test,expect} from '@playwright/test';

test('api put method', async({request}) =>
{
    //Contruct the data
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const  PostContent = {
        id: 101,
        title: 'foo1',
        body: 'bar 1',
        userId: 1
    }

     const options ={
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            data : PostContent
        }

    // Send a Post request
    const respone = await request.put(url,options)
    const responseBody = await respone.json();
    
    //Print out data
    console.log(respone);

    //Verification
    const {status} = respone;
    expect(respone.status()).toBe(200);

    const {title,body,userId,id} = responseBody;
    expect(title).toBe(PostContent.title);
    expect(body).toBe(PostContent.body);
    expect(userId).toBe(PostContent.userId);
   expect(id).toBeTruthy;

})