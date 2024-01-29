import {agent as supertest} from 'supertest'
import {app, db} from "../src/app";

const req = supertest(app)

describe('/videos', () => {

    beforeAll(async () => {
        // await req.delete('/testing/all-data').expect(204)
    })

    afterAll(async () => {
    })

    it('GET videos = []', async () => {
        db.videos = [{title: 'x'}]

        const x = 'super'
        const res = await req
            .post(`/videos/1?search=${x}`)
            .send({title: 1})
            .expect(200)

        // console.log(res.body)
        expect(res.body.length).toBe(1)
    })
})