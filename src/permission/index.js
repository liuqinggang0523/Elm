import router from '../router'
import progiess from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach(function (to, from, next) {
  progiess.start()
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
router.afterEach(function () {
  progiess.done()
})
