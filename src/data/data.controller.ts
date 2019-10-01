import { Controller, Get, Logger, Render } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    private logger = new Logger('DataController');
    constructor(private dataService: DataService) { }

    @Get()
    @Render('index')
    getData() {
        return this.dataService.getData();
    }
}
