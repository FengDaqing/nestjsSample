import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserDecorator = createParamDecorator(function (data, ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest(); 
    return req.body;
});