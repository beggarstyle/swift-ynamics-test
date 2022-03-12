import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly userModel) {}

  async findByMail(params) {
    const items = await this.userModel
      .find({ email: params.email })
      .exec()

    return items.reduce(({}, item) => {
      return item
    }, {})
  }
}
