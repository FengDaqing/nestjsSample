import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const RequestHeader = createParamDecorator(function (name, ctx: ExecutionContext) {
    const request = ctx.switchToHttp().getRequest();
    return request.headers[name];
});