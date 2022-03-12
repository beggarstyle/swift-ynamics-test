'use strict'

const FormsModel = use('App/Models/Api/Forms')

class DashboardController {
  constructor() {
    this.forms = new FormsModel()

    this.state = {
      items: []
    }
  }

  async index ({ session, view }) {
    const items = await this.forms
      .getItems({ id: session.get('auth').id })
      .then(res => res.data)

    console.log('items', items)
    this.state.items = items

    return view.render('dashboard.index', this.state)
  }

  async approve ({ params, session, response }) {
    console.log('params', params, session.get('auth').email)

    const paramsApprove = {
      id: params.id,
      // form_id: params.id,
      user_id: session.get('auth').id,
    }

    console.log('paramsApprove', paramsApprove)

    const approve = await this.forms
      .postApprove(paramsApprove)
      // .then(res => res.data)

    console.log('approve', approve.data)

    // return view.render('dashboard.index')
    response.redirect('/')
  }
}

module.exports = DashboardController
