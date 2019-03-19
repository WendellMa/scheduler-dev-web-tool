export const PENDING = 'PENDING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const createRequestTypes = base => [PENDING, SUCCESS, FAILURE].reduce((actionCreator, type) => {
  actionCreator[type] = `${base}_${type}`
  return actionCreator
}, {})


export const createAction = (type, payload = {}) => ({
  type,
  ...payload
})

export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  }
  return state
}