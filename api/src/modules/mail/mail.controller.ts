import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { ConfirmationInterface } from './interfaces/confirmation.interface'

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('/')
  index() {
    // ConfirmationInterface
    return this.mailService.sendUsersConfirmation({
      to: 'beggar.style@gmail.com',
      subject: 'Testing Nest MailerModule 2',
      template: 'confirmation'
    })
  }
}
