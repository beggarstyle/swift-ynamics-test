import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
const crypto = require("crypto");

require('dotenv').config()

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(user, params) {
    if (! user) {
      return { statusCode: 401 }
    }

    // the decipher function
    const decipher = crypto.createDecipheriv(
      process.env.CRYPTO_ALGORITHM,
      process.env.CRYPTO_KEY,
      process.env.CRYPTO_IV
    )
    let decryptedData = decipher.update(params.password, 'hex', 'utf-8')
    decryptedData += decipher.final('utf8')

    const isMatch = await bcrypt.compare(decryptedData, user.password)

    if (isMatch) {
      return { statusCode: 200 }
    }
    return null
  }

  async login(params: any) {
    console.log('login', params)
    const payload = { email: params.email, status: params.status };

    return {
      id: params._id,
      email: params.email,
      status: params.status,
      access_token: this.jwtService.sign(payload),
    }
  }

  async signup(params: any) {
    const hash = bcrypt.hashSync(params.password, process.env.BCRYPT_SALT);
    return hash
    // return await bcrypt.hashSync(params.password, process.env.BCRYPT_ROUNDS);
  }

  async signin(params: any) {
    const user = await this.usersService.findByMail({ email: params.email })
    if (! user) {
      return {}
    }

    const validated = await this.validateUser(user, params)

    return (validated.statusCode === 200) ? this.login(user) : {}
  }
}