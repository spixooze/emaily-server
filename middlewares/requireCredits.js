module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).res.send({ error: 'Not enough credits!' })
  }

  next()
}
