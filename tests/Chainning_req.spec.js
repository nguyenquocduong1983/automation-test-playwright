/*
*Create order > read order detail> Update order> Delete Order ||CRUD

*/

const {test, expect} = require('@playwright/test')

test('should be able to perform CRUD on post type',async ({request}) => {


    //Contruct data
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const  postContent ={
        title:'tiêu đề',
        body: 'nội dung post',
        UserId:1 
    };
    const  puttContent ={
        title:'tiêu đề cập nhật',
        body: 'nội dung post cập nhật',
        UserId:1 
    }
    const headers ={
        'Content-type':'application/json; charset: UTF-8'
    }
    
    const postOption = {
        headers: headers,
        data: postContent

    }

    const putOption = {
        headers: headers,
        data: puttContent

    }

    //Create a post
    const PostRes = await request.post(baseUrl + '/posts', postOption);
    const PostjosonBody = await PostRes.json();
    let postId = PostjosonBody.id;
    postId = Number(postId) -1;

    //Reuse the post id to read the detail
    const getRes = await request.get(baseUrl + '/posts/'+ postId);
    const getjsonBody = await getRes.json();
    console.log(getjsonBody);


    // //Update the post detail
    // const PuttRes = await request.put(baseUrl + '/posts', putOption);


    // //Delete the post
    // const DeleteRes = await request.delete(baseUrl + '/posts');



});