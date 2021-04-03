import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TodoModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
