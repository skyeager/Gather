const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const CategoryRouter = require('./routes/CategoryRouter')
const EventRouter = require('./routes/EventRouter')
const UserEventRouter = require('./routes/UserEventRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ msg: `Server Works!` }))
app.use('/auth', AuthRouter)
app.use('/category', CategoryRouter)
app.use('/event', EventRouter)
app.use('/userevent', UserEventRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))

// const express = require('express')
// const cors = require('cors')
// const logger = require('morgan')

// const PORT = process.env.PORT || 3001

// const app = express()

// app.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`)
// })
