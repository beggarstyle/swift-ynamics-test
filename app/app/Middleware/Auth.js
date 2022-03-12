'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Auth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, session }, next) {
    // console.log('Auth handle', (! session.get('auth') || ! session.get('auth').status))
    // console.log('session', session.has('auth'))
    if (! session.get('auth')) {
      response.redirect('/login')
    }
    // call next to advance the request
    await next()
  }
}

module.exports = Auth
