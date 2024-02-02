import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //new AppController(AppService) 의미
  providers: [AppService],
})
export class AppModule {}
