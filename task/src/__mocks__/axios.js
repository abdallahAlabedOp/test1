// import axios, { AxiosRequestConfig } from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
// const axiosMockInstance = axios.create();
// export const axiosMockAdapterInstance= new AxiosMockAdapter(axiosMockInstance, { delayResponse: 0 });
// export default axiosMockInstance;

export default {
  get: jest.fn(URL).mockResolvedValue(),
  get: jest.fn(URL).mockResolvedValue(()=>{}),

  get: jest.fn().mockResolvedValue([{ data: {} }])
};
// await mock.onGet('https://jsonplaceholder.typicode.com/comments').reply(() => {
//        data: data =  [{
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//       }];
//       return [200, { data }]
//     });



// axios.get.mockResolvedValueOnce((api) => {
//     if (api === 'https://jsonplaceholder.typicode.com/posts'){
//       return Promise.resolve({
//         data: [
//           {
//             id: 1,
//             userId: 1,
//             title: "hello there",
//             body: "test",
//           },
//         ]
//       })
//     }else
//     return Promise.resolve( {
//           data: [{
//             "postId": 1,
//             "id": 1,
//             "name": "id labore ex et quam laborum",
//             "email": "Eliseo@gardner.biz",
//             "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//           }]
//         })
//   }
//   );


    // jest.mock('../components/Comment', () => ({ Comment: () => 'Comment' }));

// it('returns data when sendMessage is called', done => {
//     var mock = new MockAdapter(axios);
//     const data = { response: true };
//     mock.onGet('https://us-central1-hutoma-backend.cloudfunctions.net/chat').reply(200, data);

//     chatbot.sendMessage(0, 'any').then(response => {
//         expect(response).toEqual(data);
//         done();
//     });
// });