const express = require(`express`)
const createError = require(`http-errors`)

const router = express.Router()

const Post = require(`../../models/posts`)

router.get(`/getallpost`, async (req, res, next) => {

    try {

        const getAllPost = await Post.find({})

        res.json(getAllPost)
        
    } catch (err) {
        next(createError(err.status, err))
    }

})

router.post(`/createpost`, async (req, res, next) => {

    try {

        const newPost = await new Post (req.body)

        const submittedPost = await newPost.save()

        res.json(submittedPost)
        
    } catch (err) {
        next(createError(err.status, err))
    }

})

module.exports = router