import apiController from './controller'

export const GET_BASE_ROUTE = '/removeDuplicate'
export const POST_BASE_ROUTE = '/changeVowals'

export const initialize = (server) => {
  server.get(`${GET_BASE_ROUTE}/:phrase`, apiController.removeDuplicate)

  server.post(`${POST_BASE_ROUTE}`, apiController.changeVowals)
}

export default {
  initialize,
  GET_BASE_ROUTE,
  POST_BASE_ROUTE
}
