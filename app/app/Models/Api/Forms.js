'use strict'

const Axios = use('axios')

class Forms {
  getItems(params) {
    return Axios({ url: `${process.env.API_URL}/forms/${params.id}` })
  }

  getFindById(params) {
    return Axios({ url: `${process.env.API_URL}/forms/${params.id}` })
  }

  postStore(params) {
    return Axios({
      url: `${process.env.API_URL}/forms`,
      method: 'post',
      data: params.data
    })
  }

  postUpdate(params) {
    return Axios({
      method: 'post',
      url: `${process.env.API_URL}/forms/${params._id}`,
      data: params
    })
  }

  getDelete(params) {
    return Axios({
      url: `${process.env.API_URL}/apis/members/${params._id}`,
      method: 'delete'
    })
  }

  postApprove(params) {
    return Axios({
      method: 'post',
      url: `${process.env.API_URL}/forms/${params.id}/approve`,
      data: params
    })
  }
}

module.exports = Forms
