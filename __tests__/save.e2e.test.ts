import {agent as supertest} from 'supertest'
import {app} from "../src/save";

const req = supertest(app)

// describe('/videos', () => {
//
//     beforeAll(async () => {
//         // await req.delete('/testing/all-data').expect(204)
//     })
//
//     afterAll(async () => {
//     })
//
//     it('GET products = []', async () => {
//         const res = await req
//             .get('/videos')
//             .expect(200)
//
//         console.log(res.body)
//     })
// })