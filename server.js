const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const RestaurantRouter = require('./routes/RestaurantRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ msg: `Server Works!` }))
app.use('/user', AuthRouter)
app.use('/review', ReviewRouter)
app.use('/restaurants', RestaurantRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))

// const express = require('express')
// const cors = require('cors')
// const logger = require('morgan')

// const PORT = process.env.PORT || 3001

// const app = express()

// app.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`)
// })
