const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController')
const blogController = require('../controllers/blogController')

const middleware = require('../middleware/middleware')


router.post('/authors', authorController.createAuthor);

router.post('/login', authorController.loginAuthor);

router.post('/blogs', middleware.authentication, blogController.createBlog);

router.get('/filterblogs', middleware.authentication, blogController.getBlog);

 router.delete('/blogs/:blogId',middleware.authentication,  blogController.deleteBlog );

 router.put('/blogs/:blogId',middleware.authentication,blogController.updateBlog)

 router.delete('/blogs',middleware.authentication, blogController.blogDeleteOptions)


module.exports=router;

