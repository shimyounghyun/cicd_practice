// app.ts -> server.ts -> controller 동작 확인
import app from '../testApp';
import request from 'supertest';

describe("GET /api/auth/status", ()=> {
   it("200: 연결 성공", async () => {
      const response = await request(app)
          .get("/api/auth/status")
          .expect(200);
   });
});
