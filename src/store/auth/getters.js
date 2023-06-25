export default {
  isLoggedIn: (state) => !!state.token,
  user: (state) => state.user,
  authDialog: (state) => state.authDialog,
}
