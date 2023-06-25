export default {
  updateUser(state, payload) {
    state.user = payload
  },
  auth_success(state, payload) {
    state.status = payload
    state.token = localStorage.getItem('token')
    state.user = JSON.parse(localStorage.getItem('user'))
  },
  auth_error(state, payload) {
    state.status = payload
  },
  authDialog(state, payload) {
    state.authDialog.status = payload.status
    state.authDialog.title = payload.title
    if (payload.type) {
      state.authDialog.type = payload.type
    }

    state.authDialog.message = payload.message
  },
}
