const cors = require('cors')
const express = require('express')
const app = express()

const port = process.env.PORT || 9002

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const mongoose = require('mongoose')

const dbPosts = mongoose.createConnection("mongodb://127.0.0.1:27017/postsnew");
const dbUserInfo = mongoose.createConnection("mongodb://127.0.0.1:27017/userinfonew");


dbPosts.once('open', _ => {
  console.log('Database connected: posts');
});

dbUserInfo.once('open', _ => {
  console.log('Database connected: userinfo');
});

dbPosts.on('error', err => {
  console.error('connection error: posts');
});

dbUserInfo.on('error', err => {
  console.error('connection error: userinfo');
});

const Schema = mongoose.Schema

const postsSchema = Schema({
  userID: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, {collection: 'feed'}) // Note that within our DB, we are storing these images in a collection called feed. 

const POSTS = dbPosts.model('POSTS', postsSchema)

const userInfoSchema = Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  posted: {
    type: [mongoose.Types.ObjectId],
    required: true
  },
  liked: {
    type: [mongoose.Types.ObjectId],
    required: false
  },
}, {collection: 'users'}) // Note that within our DB, we are storing these images in a collection called feed. 

const USERINFO = dbUserInfo.model('USERINFO', userInfoSchema)

var ObjectID = require('mongodb').ObjectID;
/* --------------- BREAK -----------------*/

app.get("/", function (req, res) {
  // GET "/" should return a list of all posts stored in our database
  POSTS.find().then((feed) => {
    res.send({ message: "Return all posts.", posts: feed});
  })
});

app.get("/sortlh", function (req, res) {
  // GET "/" should return a list of all posts stored in our database
  POSTS.find().sort( { price: 1 } ).then((feed) => {
    res.send({ message: "Return all posts.", posts: feed});
  })
});

app.get("/sorthl", function (req, res) {
  // GET "/" should return a list of all posts stored in our database
  POSTS.find().sort( { price: -1 } ).then((feed) => {
    res.send({ message: "Return all posts.", posts: feed});
  })
});

app.get("/filter", function (req, res) {
  console.log("in server.js");
  console.log(req.query);
  
  // GET "/filter" should return a list of all posts stored in our database that match the filters

  // the following consts are all arrays

  // below code works with postman, not with actual website
  // const category = req.body.category;
  // const price = req.body.price;
  // const location = req.body.location;
  // var query = {};

  const category = req.query.category;
  const location = req.query.location;
  var query = {};

  if (Array.isArray(category) && category.length) {
      query.category = {$in: category};
  }

  if (Array.isArray(location) && location.length) {
      query.location = {$in: location};
  }

  console.log(query);
  
  POSTS.find(req.query).then((feed) => {
    res.json({ message: "Return filtered posts.", posts: feed});
  })
});

app.get("/post/:postID", async(req, res) => {
  // GET "/post/:postID" should return one post by postID
  try {
    const post = await POSTS.findById(req.params.postID);
    res.json(post);
  } catch(e) {
    res.send({message: "Error in Fetching post"});
  }
});

app.post("/newpost/:userID", async(req, res) => {
  // POST "/newpost" adds a post to our database
  var newPostID = new ObjectID();
  const user = await USERINFO.findById(req.params.userID);
  const post = new POSTS({
    _id: newPostID,
    userID: req.params.userID, // FRONTEND PPL DONT NEED TO INCLUDE THIS
    username: user.name,
    email: user.email,
    title: req.body.title,
    category: req.body.category,
    imageURL: req.body.imageURL,
    price: req.body.price,
    location: req.body.location,
    description: req.body.description,
  });
  
  await post.save((error, new_post) => {
    if (error) {
      res.json({ status: "failure", error: error});
    }
  });
  
  try {
    user.posted.push(newPostID);
    await user.save();
    res.send(user);
  } catch(e) {
      res.send({message: "cannot add to posted list"});
  }
});

app.delete("/deletepost/:userID/:postID", async(req, res) => {
  // DELETE "/delete" deletes a post according to the postID
  await POSTS.findByIdAndDelete(req.params.postID, (error) => {
    if (error) {
      res.json({ status: "failure", error: error});
    }
  }).clone();

  try {        
    const user = await USERINFO.findById(req.params.userID);
    const index = user.posted.indexOf(req.params.postID);
    if (index > -1) {
      user.posted.splice(index, 1);
    }
    await user.save();
    res.send(user);
  } catch(e) {
      res.send(e);
  }
});

app.put("/likepost/:userID/:postID", async(req, res) => {
  // DELETE "/delete" deletes a post according to the postID
  try {        
    const user = await USERINFO.findById(req.params.userID);
    user.liked.push(req.params.postID);
    await user.save();
    res.send(user);
  } catch(e) {
      res.send(e);
  }
});

/* -------------BREAK----------*/

app.post("/login", async(req, res) => {
  // TODO: GET "/user/:userID" should return one user by userID

  USERINFO.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      res.send({message: "Log in failed", error: err})
    } else if (user) {
      if (req.body.password == user.password) {
        res.send({ message: "Log in succeeded", user: user})
      } else {
        res.send({ message: "Password not match "})
      }
    } else {
      res.send({ message: "User not registered"})
    }
  })
});

app.get("/user/:userID", async(req, res) => {
  // TODO: GET "/user/:userID" should return one user by userID
  USERINFO.findById(req.params.userID, (err, user) => {
    if (err) {
      res.send({error: err})
    } else if (user) {
      POSTS.find({ _id: { $in: user.posted } }, (err, posts) => {
        if (posts) {
          res.send({user: user, posts: posts})
        }
      })
    }
  })
});

app.post("/register", async(req, res) => {
  // POST "/add" adds a post to our database
  USERINFO.findOne({ email: req.body.email}, (err, user) => {
    if (user) {
      res.send( {message: "User already registered"} )
    } else {
      const user = new USERINFO({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        posted: req.body.posted,
        liked: req.body.liked,
      });

      user.save((error, newUser) => {
        if (error) {
        res.send({ message: "Register failed", error: error});
        } else {
        res.send({
            message: "Register succeeded",
            userID: newUser._id,
            content: req.body
          });
        }
      })
    }
  })
});


app.get("/users", function (req, res) {
  // GET "/" return all users stored in our database
  USERINFO.find().then((users) => {
    res.json({ message: "Return all users.", users: users});
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})