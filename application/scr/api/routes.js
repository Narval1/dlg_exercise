import apiController from './controller'
import { emptyBodyValidator } from '../middlewares/emptyBody'
import { jsonValidator } from '../middlewares/jsonValidator'

export const GET_BASE_ROUTE = '/removeDuplicate'
export const POST_BASE_ROUTE = '/changeVowals'

export const initialize = (server) => {
  server.get(`${GET_BASE_ROUTE}/:phrase`, apiController.removeDuplicate)

  server.post(`${POST_BASE_ROUTE}`, jsonValidator, emptyBodyValidator, apiController.changeVowals)
}

export default {
  initialize,
  GET_BASE_ROUTE,
  POST_BASE_ROUTE
}
