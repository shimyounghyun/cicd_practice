import {
    JsonController,
    HttpCode,
    Get
} from 'routing-controllers';

@JsonController("/auth")
export class AuthController {
    constructor() {
    }

    @HttpCode(200)
    @Get("/status")
    public async status(){
        return {result : 'success'};
    };
};