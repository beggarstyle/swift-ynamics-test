// import { Module, HttpModule } from '@nestjs/common';
import { Module } from '@nestjs/common'
import { HttpModule, HttpService } from '@nestjs/axios'
// import {} from '@nestjs/axios'
import { TtnController } from './ttn.controller';
import { TtnService } from './ttn.service';

@Module({
  imports: [HttpModule],
  controllers: [TtnController],
  providers: [TtnService]
})
export class TtnModule {}
