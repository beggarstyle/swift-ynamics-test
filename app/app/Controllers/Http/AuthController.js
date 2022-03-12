'use strict'

const Axios = use('axios')
// const bcrypt = require('bcrypt');
const crypto = require("crypto");
const Env = use('Env');

class AuthController {
  constructor() {
    this.state = {
      items: [],
      item: {}
    }
  }

  async login ({ view }) {
    return view.render('layouts.login', this.state)
  }

  async signin ({ request, response, session }) {
    console.log('AuthController@Signin', request.all(), session.get('auth'))
    // the cipher function
    const cipher = await crypto.createCipheriv(process.env.CRYPTO_ALGORITHM, process.env.CRYPTO_KEY, process.env.CRYPTO_IV);
    let encryptedData = await cipher.update(request.input('password'), 'utf-8', 'hex');
    encryptedData += await cipher.final('hex');

    // console.log('encryptedData', encryptedData)

    const api = await Axios({
      method: 'post',
      url: `${process.env.API_URL}/auth/signin`,
      data: {
        email: request.input('email'),
        password: encryptedData
      }
    })
    .catch(e => console.log('e', e.data))

    if (api.data) {
      session.put('auth', api.data)
    }

    response.redirect('/')
  }

  async logout ({ session, response }) {
    session.forget('auth')
    response.redirect('/login')
  }
}

module.exports = AuthController
