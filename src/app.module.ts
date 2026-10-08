import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CsvModuleModule } from './csv/csv.module/csv.module.module.js';


@Module({
  imports: [CsvModuleModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
