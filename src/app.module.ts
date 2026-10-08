import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CsvModule} from './csv/csv.module.js';


@Module({
  imports: [CsvModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
