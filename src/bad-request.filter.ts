import { ArgumentsHost, Catch, ExceptionFilter, BadRequestException } from '@nestjs/common';

@Catch(BadRequestException)
export class BadRequestFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    return host.switchToHttp().getResponse().render('error');
  }
}
