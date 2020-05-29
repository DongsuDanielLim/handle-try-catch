function wrapMiddleware (middleware) {
  return async function wrapped (req, res, next) {
    try {
      await middleware(req, res, next)
    } catch (e) {
      return next(e)
    }
  }
}

module.exports = wrapMiddleware
