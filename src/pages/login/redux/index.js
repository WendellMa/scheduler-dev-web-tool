import {
  createAction,
  createReducer,
  createRequestTypes,
} from '$utils/action'

export const REQUEST_GET_CUSTOMER_TASK_LIST = 'REQUEST_GET_CUSTOMER_TASK_LIST'
export const GET_CUSTOMER_TASK_LIST = createRequestTypes('GET_CUSTOMER_TASK_LIST')

export const getCustomerList = () => createAction(REQUEST_GET_CUSTOMER_TASK_LIST)

const initialState = {
  list: []
};


export default createReducer(initialState, {
  GET_CUSTOMER_TASK_LIST_SUCCESS: (state, action) => ({
    ...state,
    list: action.list
  }),
  GET_CUSTOMER_TASK_LIST_FAILURE: state => ({
    ...state,
  })
});