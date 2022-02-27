const isAuth = async (to, from, next) => {
  const random = Math.random() * 100
  return new Promise((res) => {
    if (random > 50) {
      next()
    }
    next({ name: 'poke-home' })
  })
}

export default isAuth
