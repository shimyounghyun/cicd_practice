import Container from "typedi";
import {createConnection, ConnectionOptions, useContainer, Connection} from "typeorm";
import { env } from "../../src/env";

/**
 * 데이터베이스 커넥션을 생성한다.
 */
export async function createDatabaseConnection() {
    try {
        const connectionOpts: ConnectionOptions = {
            type: "postgres",
            host: env.database.host,
            port: env.database.port,
            username: env.database.usename,
            password: env.database.password,
            database: env.database.name,
            synchronize: env.database.synchronize,
            logging: env.database.logging,
            entities: [__dirname + "/entities/*{.ts,.js}"],
        };

        useContainer(Container);
        return createConnection(connectionOpts);
    } catch (error) {
        throw error;
    }
}

describe("연결성공?", ()=>{
   let db: Connection;

   beforeAll(async () => {
       db = await createDatabaseConnection();
   })

    afterAll(()=> db.close());

});