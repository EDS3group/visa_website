import axios from 'axios'
import router from '@/router/index'
// import i18n from '@/i18n'
// import { toastBus } from '../../main'

export default {
  register(context, user) {
    const frmData = new FormData()
    frmData.append('first_name', user.first_name)
    frmData.append('last_name', user.last_name)
    frmData.append('email', user.email)
    frmData.append('phone', user.phone)
    frmData.append('password', user.password)
    frmData.append('terms', 1)
    context.commit('auth_error', '')
    context.commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios({
        url: 'register',
        data: frmData,
        method: 'POST',
      })
        .then((resp) => {
          context.commit('auth_error', '')
          context.commit('setLoading', false)

          // toastBus.emit('add', {
          //   severity: 'success',
          //   summary: 'Test',
          //   detail: 'Test',
          //   life: 3000,
          // })
          // toast.success(resp.data.msg)
          if (resp.data.status == false) {
            context.commit('authDialog', {
              status: true,
              title: 'Registration Successful!',
              message: 'Your account is registered under email',
            })
            console.log(context.state.authDialog)
          } else {
            context.commit('authDialog', {
              status: true,
              title: 'Registration Successful!',
              message: 'Your account is registered under email',
            })

            context.commit('updateUser', resp.data.data)
            localStorage.setItem(
              'user',
              JSON.stringify(resp.data.data.user_information),
            )
            localStorage.setItem('token', resp.data.data.token)
            context.commit('auth_success')
            setTimeout(() => (window.location.href = '/'), 3000)
          }
          console.log(resp)
        })
        .catch((err) => {
          console.log(err.response)
          context.commit('setLoading', false)
          // if (err.response.data.status == false) {
          //   context.commit('auth_error', err.response.data.msg)
          //   // toast.error(err.response.data.msg)
          // }

          // toastBus.emit('add', {
          //   severity: 'error',
          //   summary: this.$t('Register Error'),
          //   detail: this.$t('try again'),
          //   life: 3000,
          // })

          reject(err)
        })
    })
  },

  login(context, user) {
    context.commit('auth_error', '')
    context.commit('setLoading', true)
    return new Promise((resolve, reject) => {
      axios({
        url: '/login',
        data: {
          email: user.email,
          password: user.password,
        },
        method: 'POST',
      })
        .then((resp) => {
          if (resp.data.status == true) {
            context.commit('auth_error', '')
            context.commit('setLoading', false)

            context.commit('updateUser', resp.data.data)
            localStorage.setItem(
              'user',
              JSON.stringify(resp.data.data.user_information),
            )
            localStorage.setItem('token', resp.data.data.token)
            context.commit('authDialog', {
              type: 'success',
              status: true,
              title: 'Login Successful!',
              message: 'Your account is Logged in under email',
            })
            context.commit('auth_success')
            console.log(sessionStorage.getItem('from_route'))
            if (sessionStorage.getItem('from_route')) {
              router.push(sessionStorage.getItem('from_route'))
              sessionStorage.removeItem('from_route')
            } else {
              router.push('/')
            }
            // setTimeout(() => (window.location.href = '/'), 3000)
            // toast.success(resp.data.msg)
          } else {
            context.commit('authDialog', {
              type: 'fail',
              status: true,
              title: 'invalid login',
              message: 'invalid email or password',
            })
            context.commit('setLoading', false)
          }

          resolve(resp)
        })
        .catch((err) => {
          if (err) {
            if (err.response.data.status == false) {
              context.commit('auth_error', err.response.data.msg)
              context.commit('setLoading', false)
              // toast.error(err.response.data.msg)
            }
          }
          context.commit('setLoading', false)
          reject(err)
        })
    })
  },
  logout(context) {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    localStorage.removeItem('cartDetails')
    localStorage.removeItem('token')
    context.commit('logout')
    window.location.reload()
  },
}
