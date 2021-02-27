require('dotenv').config()
const express = require(`express`)
const mongoose = require(`mongoose`)
const createError = require(`http-errors`)
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const rootRouter = require(`./routes/root.route/root`)
const postRouter = require(`./routes/post.route/post`)

mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(postRouter)
app.use(rootRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port 5000.`)
})