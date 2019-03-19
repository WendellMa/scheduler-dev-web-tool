import {
  put,
  call,
  take,
  fork
} from 'redux-saga/effects';
import * as actions from '../redux'
import {
  customerApi
} from '$service/serviceApi'
import message from 'antd/lib/message'

function* getCustomerList() {
  try {
    const data = yield call(customerApi.getCustomerList.bind(customerApi), {})
    yield put({
      type: actions.GET_CUSTOMER_TASK_LIST.SUCCESS,
      list: data.list
    })
  } catch (error) {
    message.success('失败')
    yield put({
      type: actions.GET_CUSTOMER_TASK_LIST.FAILURE,
      list: []
    })
  }
}
export function* watchGetCustomerList() {
  while (true) {
    yield take(actions.REQUEST_GET_CUSTOMER_TASK_LIST)
    yield fork(getCustomerList)
  }
}
