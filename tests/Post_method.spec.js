import {test,expect} from '@playwright/test';

test('api post method', async({request}) =>
{
    //Contruct the data
    const url = "https://jsonplaceholder.typicode.com/posts";
    const  PostContent = {
        id: 101,
        title: 'foo',
        body: 'bar',
        userId: 1
    }

     const options ={
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            data : PostContent
        }

    // Send a Post request
    const respone = await request.post(url,options)
    const responseBody = await respone.json();


    //Verification
    const {status} = respone;
    expect(respone.status()).toBe(201);

    const {title,body,userId,id} = responseBody;
    expect(title).toBe(PostContent.title);
    expect(body).toBe(PostContent.body);
    expect(userId).toBe(PostContent.userId);
   expect(id).toBeTruthy;

})