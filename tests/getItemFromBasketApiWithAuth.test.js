var supertest = require('supertest')
const testData = require('../testData/common.json');
const request = supertest(testData.baseUrl)
let token


describe("Test suite item from basket", () => {

    it('Login', async () => {

        let body_login = {
            email: testData.email,
            password: testData.password
        }
        let response = await request.post("/rest/user/login").send(body_login)
        console.log(response.status)
        expect(response.status).toBe(200)
        token = response.body.authentication.token
        console.log(token)

    })

    it('Get backet item id', async () => {
        let response = await request.get("/rest/basket/12").set("authorization", "Bearer " + token).send()
        console.log(response.status)
        expect(response.status).toBe(200)
        console.log(response.body)
    })


})