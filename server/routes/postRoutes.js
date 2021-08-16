const router = require('express').Router()
const postController = require('../controllers/postController')
const { tokenMiddleware, adminMiddleware } = require('../middlewares/tokenMiddleware')

router.get('/invalidatedposts', tokenMiddleware, adminMiddleware, postController.getInvalidatedPosts)
router.get('/validatedposts', tokenMiddleware, postController.getValidatedPosts)
router.get('/postcount', postController.getPostsCount)
router.post('/addpost', tokenMiddleware, postController.addPost)
router.delete('/deletepost/:id', tokenMiddleware,adminMiddleware, postController.deletePost)
router.put('/updatepostuser/:id', tokenMiddleware, adminMiddleware, postController.updatepostuser)
router.put('/likeposts/:id',tokenMiddleware, postController.updatelike) // for validatedposts

module.exports = router
