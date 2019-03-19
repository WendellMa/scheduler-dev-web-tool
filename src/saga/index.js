import {
  all,
  // fork
} from 'redux-saga/effects'
// import {
//   saga as customerSaga
// } from '$pages/login'

export default function* root() {
  yield all([
    // fork(customerSaga.watchGetCustomerList)
  ])
}