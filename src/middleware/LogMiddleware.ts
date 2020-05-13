import { NestMiddleware, ExecutionContext, Injectable, NestInterceptor, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import Logger from '../utils/Logger.js'

@Injectable()
export class LogMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        const code = res.statusCode; // 响应状态码
        next();
        // 组装日志信息
        const logFormat = `Method: ${req.method} \n Request original url: ${req.originalUrl} \n IP: ${req.ip} \n Status code: ${code} \n`;
        // 根据状态码，进行日志类型区分
        if (code >= 500) {
            Logger.Warn("Failure 500");
        } else if (code >= 400) {
            Logger.Warn("Failure 400");
        } else if (code >= 404) {
            Logger.Warn("Failure 404");
        } else  if (code==200) {
            Logger.Warn("Success");
        }
        Logger.Info(logFormat);
    }
}

