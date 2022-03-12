import { Controller, Param, Body, Get, Post } from '@nestjs/common';
import { FormsService } from './forms.service'
import { MailService } from '../mail/mail.service'

@Controller('forms')
export class FormsController {
  constructor(
    private readonly formsService: FormsService,
    private readonly mailService: MailService,
  ) {}

  @Get('/:userId')
  index(@Param() param) {
    // console.log('param', param)
    return this.formsService.fetch(param)
  }

  @Post('/:id/approve')
  async approve(@Body() params) {
    await this.formsService.approve(params)
    const sendMail = await this.formsService.sendMail(params)

    if (sendMail) {
      this.mailService.sendUsersConfirmation({
        to: 'beggar.style@gmail.com',
        subject: 'Testing Nest MailerModule',
        template: 'confirmation'
      })
    }

    return { code: 200 }
  }
}
