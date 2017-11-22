import util from '../utils/util'
import config from '../constants/config'

const serverURL = config.SERVER_URL
const request = util.wxPromisify(wx.request)

function getLawTypes() {
  return request({url: serverURL + '/law/types.json'})
}

function getLawsByType(typeId) {
  return request({ url: serverURL + '/law/list.json', data: {typeId: typeId}})
}

function getLawsBySearch(searchText) {
  return request({ url: serverURL + '/law/list.json', data: {search: searchText}})
}

function getLawById(id) {
  return request({ url: serverURL + '/law/details.json', data: {id: id}})
}

module.exports = {
  getLawTypes: getLawTypes,
  getLawsByType: getLawsByType,
  getLawsBySearch: getLawsBySearch,
  getLawById: getLawById
}
