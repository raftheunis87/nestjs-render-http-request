import { Injectable, Logger, HttpService, BadRequestException } from '@nestjs/common';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
    private logger = new Logger('DataService');

    constructor(private readonly httpService: HttpService) { }

    getData() {
        return this.httpService.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
            tap(() => {
                throw new Error();
            }),
            map(response => response.data),
            map(resData => ({
                message: resData.title,
            })),
            catchError((err: any) => {
                this.logger.error(err);
                throw new BadRequestException();
            }),
        );
    }
}
