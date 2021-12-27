const request = require('supertest');
const app = require('../src/app');
const db = require('../src/helper/db')


describe('Post Endpoints', () => {
  test('should send a correct post request', async () => {
    const res = await request(app)
      .post('/api')
      .send({
        startDate: "2016-01-26",
        endDate: "2016-02-02",
        minCount: 2000,
        maxCount: 2800,
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('code')
  });

  test('with a missing parameter', async () => {
    const res = await request(app)
      .post('/api')
      .send({
        startDate: "2016-01-26",
        endDate: "2016-02-02",
        minCount: 2000,
      })
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
  });

  test('not such an EP', async () => {
    const res = await request(app)
    .get('/about')
    expect(res.statusCode).toEqual(404)
    expect(res.body).toHaveProperty('error')
  })
  
})

afterAll(() => {
  app.close(); // to avoid TCPSERVERWRAP 
  db.disconnetToMongo(); // to close to DB connection
});