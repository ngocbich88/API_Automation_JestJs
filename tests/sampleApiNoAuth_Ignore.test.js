var supertest = require('supertest')
const request = supertest("https://reqres.in")


describe("Test suite user", () => {

    it('Get list of users', async () => {
        let response = await request.get("/api/users?page=2")
        expect(response.status).toBe(200)
        console.log(response.body)
    })

    it('Create new users', async () => {
        let response = await request.post("/api/users").send({ "name": "Peter One", "job": "teacher" })
        expect(response.status).toBe(201)
        console.log(response.body)
    })



})
