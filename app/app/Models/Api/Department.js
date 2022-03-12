'use strict'

const Axios = use('axios')

class Department {
  getItems () {
    return Axios({ url: `${process.env.API_URL}/apis/departments` })
      .then(res => {return res})
  }

  getFindById(params) {
    return Axios({ url: `${process.env.API_URL}/apis/departments/${params.id}` })
  }

  postCreate (params) {
    return Axios({
      method: 'post',
      url: `${process.env.API_URL}/apis/departments`,
      data: params
    })
      .then(res => {return res})
  }

  postUpdate(params) {
    return Axios({
      method: 'post',
      url: `${process.env.API_URL}/apis/departments/${params.id}`,
      data: {
        formData: params.formData
      }
    })
  }

  getDelete(params) {
    return Axios({
      url: `${process.env.API_URL}/apis/departments/${params._id}`,
      method: 'delete'
    })
  }
}

module.exports = Department
