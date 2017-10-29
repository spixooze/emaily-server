const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const { mongoURI, cookieKey } = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.Promise = global.Promise
mongoose
  .connect(mongoURI, { useMongoClient: true })
  .then(() => console.log('Connected to mLab'))

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
