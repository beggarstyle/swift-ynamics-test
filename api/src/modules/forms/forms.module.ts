import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { FormUsersService } from '../form-users/form-users.service';
import { FormSchema } from './schemas/form.schema';
import { FormUsersSchema } from '../form-users/schemas/form_users.schema';
import { MailService } from '../mail/mail.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Forms', schema: FormSchema },
      { name: 'FormUsers', schema: FormUsersSchema }
    ])
  ],

  controllers: [FormsController],
  providers: [FormsService, FormUsersService, MailService]
})
export class FormsModule {}
