import { Module } from '@nestjs/common';
import { FormUsersService } from './form-users.service';

@Module({
  providers: [FormUsersService]
})
export class FormUsersModule {}
