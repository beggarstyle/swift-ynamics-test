import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
// mongoose.Types.ObjectId;
// const ObjectId = mongoose.Types.ObjectId;

@Injectable()
export class FormsService {
  constructor(
    @InjectModel('Forms') private readonly formModel,
    @InjectModel('FormUsers') private readonly formUsersModel
  ) {}

  async fetch(params) {
    return this.formUsersModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "users"
        }
      },
      {
        $lookup: {
          from: "forms",
          localField: "form_id",
          foreignField: "_id",
          as: "forms"
        }
      },
      {
        $match: {
          user_id: new mongoose.Types.ObjectId(params.userId)
        }
      },
    ])
  }

  async approve(params) {
    console.log('approve')

    await this.formUsersModel
      .updateOne(
        {
          form_id: new mongoose.Types.ObjectId(params.id),
          user_id: new mongoose.Types.ObjectId(params.user_id)
        },
        {
          $set: { approved: true }
        }
      )
      .exec()
  }

  async sendMail(params) {
    console.log('sendMail')

    const items = await this.formUsersModel.find({
      form_id: new mongoose.Types.ObjectId(params.id)
    })

    // console.log('items', items)
    return items.every(item => {
      // console.log('item', item.approved, item.approved === true)
      return item.approved === true
    })
  }
}
