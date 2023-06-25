export default {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  authDialog: {
    status: false,
    title: '',
    type: 'success',
    message: '',
  },
}
