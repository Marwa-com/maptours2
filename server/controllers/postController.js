const Post = require('../models/PostSchema')
const User = require('../models/User')
const cloudianry = require('../helpers/cloudianry')

// @access user / add Post 
const addPost = async (req, res) => {
    try {
        const token = req.header("auth-token")
        const {title, description, image, address, Rate, Category, owner } = req.body
        const newPost = new Post({
            title,
            description,
            owner: req.userId,
            address,
            Rate, 
           Category
        })
        if (image) {
            const savedImage = await cloudianry.uploader.upload(image, {
                timeout: 60000,
                upload_preset: "my_app"
            })
            newPost.image = {
                url: savedImage.url,
                public_id: savedImage.public_id
            }
        }
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}
// @access user / get validated posts by Category && address
const getValidatedPosts = async (req, res) => {
    try {
        let limit = +req.query.limit
        let pageNumber = +req.query.page
        let documentCount = await Post.find({isValidate: true}).countDocuments()
        let numberTotalOfpages = Math.ceil(documentCount / limit);

        if (pageNumber > numberTotalOfpages)
            pageNumber = numberTotalOfpages
    
    const posts = await Post.find({isValidate: true}) 
            .select({ '__v': 0 })
            .sort({ 'createdAt': -1 })
            .populate({ path: 'owner', select: "nickname  _id role " })
            .skip((pageNumber - 1) * limit)
            .limit(limit)
        res.json( {posts} )
        
    }
    catch (err) {
        res.status(500).json({ errors: [{ msg: err.message }] })
    }
}
// @access Private/admin/ get invalidated posts  
const getInvalidatedPosts = async (req, res) => {
    try {

           const posts = await Post.find({isValidate: false} ) 
            .select({ '__v': 0 })
            .sort({ 'createdAt': - 1  })
            .populate({ path: 'owner', select: "nickname  _id role " })
        res.json( {posts })
    }
    catch (err) {
         res.status(500).json({ errors: [{ msg: err.message }] })
    }
}
// @access Private/admin/ update isValidate && points of ambassador
const updatepostuser= async (req, res) => {
    const updateData = req.body            
    try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id,updateData, {new:true}  );
    const user = await User.findById(updatedPost.owner)
   const score = await User.findByIdAndUpdate(user._id, { points:parseInt(user.points) + 1 },{new:true})

        res.json({ score, updatedPost })
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })
    }
} 
// @access user /like / dislike a post/ likecount
const updatelike= async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const exist = await post.likes.find((e)=>e===req.userId )
 
      if (!exist) {
        await Post.findByIdAndUpdate(req.params.id, {likes:[...post.likes,req.userId]});
        await Post.findByIdAndUpdate(req.params.id, {likecount:post.likecount + 1}) 
        const updatedPost = await Post.findById(req.params.id)
        res.status(200).json(updatedPost);
      } else {
        await Post.findByIdAndUpdate(req.params.id,{ $pull: { likes: req.userId } });
        await Post.findByIdAndUpdate(req.params.id, {likecount:post.likecount - 1}) 
        const updatedPost = await Post.findById(req.params.id)
        res.status(200).json(updatedPost);
      }
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err.message }] })
    }
  };
  // get number of posts 
const getPostsCount = async (req, res) => {
    try {
        const count = await Post.find({isValidate: true}).countDocuments()
        res.json({ count })
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })
    }
}
  // @access Private/admin/ delete post 
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        res.json("deletedPost")
    }
    catch (err) {
        res.status(400).json({ errors: [{ msg: err.message }] })
    }
}


module.exports = {getInvalidatedPosts, getValidatedPosts, addPost, getPostsCount, deletePost, updatepostuser, updatelike } 