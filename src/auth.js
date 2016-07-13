export default {
  login(email, pass, cb) {
    if (localStorage.token) {
      if (cb) {
        cb(true)
      }
      this.onChange(true)
      return
    }
    this.pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },
  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    deugger
    this.onChange(false)
  },
  getToken() {
    return localStorage.token
  },
  loggedIn() {
    return !!localStorage.token
  },
  onChange() {
    // no-op for now, will be defined later...
  },
  pretendRequest(email, pass, cb) {
    setTimeout(() => {
      if (email === 'joe@example.com' && pass === 'password1') {
        cb({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        cb({ authenticated: false })
      }
    }, 0)
  }
}
