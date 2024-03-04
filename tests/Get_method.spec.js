import {test,expect} from '@playwright/test';

test('api get method', async({request}) =>
{
  let respone = await request.get('https://jsonplaceholder.typicode.com/posts/')

  //Extract response data
  const status = respone.status()
  const JsonResponse = await respone.json()

  //Verification 
  expect(status).toBe(200)
  expect(JsonResponse.length).toBeGreaterThan(99)
  //Print out jsondata length
  console.log(JsonResponse.length)

});