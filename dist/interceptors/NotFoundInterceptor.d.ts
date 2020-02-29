import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class NotFoundInterceptor implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Promise<void>;
}
