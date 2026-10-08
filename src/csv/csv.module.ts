import { Module } from '@nestjs/common';
import { CsvService } from './csv.service.js';
import { CsvController} from './csv.controller.js';

@Module({
    providers: [CsvService],
    controllers: [CsvController],})
export class CsvModule {}
