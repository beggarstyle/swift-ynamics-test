import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUsersConfirmation(params) {
    await this.mailerService.sendMail({
      to: params.to, // list of receivers
      subject: params.subject, // Subject line
      template: params.template, // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        // name: user.name,
        // url,
      },
    });
  }
}
