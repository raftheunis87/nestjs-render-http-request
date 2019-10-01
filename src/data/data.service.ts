import { Injectable, Logger, HttpService } from '@nestjs/common';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {
    private logger = new Logger('DataService');

    constructor(private readonly httpService: HttpService) { }

    getData() {
        return this.httpService.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
            map(response => response.data),
            map(resData => ({
                message: resData.title
            }))
        )
    }
}