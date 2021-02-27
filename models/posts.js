const mongoose = require(`mongoose`)

const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    post: String
})

const Post = new mongoose.model(`Post`, postSchema)

module.exports = Post