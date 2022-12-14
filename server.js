const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const CategoryRouter = require('./routes/CategoryRouter')
const EventRouter = require('./routes/EventRouter')
const UserEventRouter = require('./routes/UserEventRouter')
const UserRouter = require('./routes/UserRouter')
const PostRouter = require('./routes/PostRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => res.json({ msg: `Server Works!` }))
app.use('/auth', AuthRouter)
app.use('/category', CategoryRouter)
app.use('/event', EventRouter)
app.use('/userevent', UserEventRouter)
app.use('/user', UserRouter)
app.use('/posts', PostRouter)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
