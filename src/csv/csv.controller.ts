import { Controller, Get, Query } from '@nestjs/common';
import { CsvService } from './csv.service.js';

@Controller('csv')
export class CsvController {
    constructor(private readonly csvService: CsvService){}

    @Get('read')
    async readCSV(@Query('file') file: string){
        return this.csvService.readCsv(file);
    }
}
