const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())

const mongoose = require('mongoose')

const db = mongoose.connection
const url = "mongodb://127.0.0.1:27017/posts"

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

db.once('open', _ => {
  console.log('Database connected: ', url);
});

db.on('error', err => {
  console.error('connection error: ', err);
})

const Schema = mongoose.Schema
const postsSchema = Schema({
  postID: {
    type: Number,
    required: true
  },
  userID: {
    type: Number,
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

const POSTS = mongoose.model('POSTS', postsSchema)

app.get("/", function (req, res) {
  // GET "/" should return a list of all posts stored in our database
  POSTS.find().then((feed) => {
    res.json({ message: "Return all posts.", posts: feed});
  })
});

app.get("/post/:postID", function (req, res) {
  // TODO: GET "/post/:postID" should return one post by postID
});

app.post("/post/add", function (req, res) {
  // POST "/add" adds a post to our database
  const post = new POSTS({
    postID: req.body.postID,
    userID: req.body.userID,
    title: req.body.title,
    category: req.body.category,
    imageURL: req.body.imageURL,
    price: req.body.price,
    location: req.body.location,
    description: req.body.description,
  });
  post.save((error, document) => {
    if (error) {
      res.json({ status: "failure", error: error});
    } else {
      res.json({
        status: "success",
        content: req.body
      });
    }
  })
});

app.delete("/post/delete", function (req, res) {
  // DELETE "/delete" deletes a post according to the postID
  POSTS.findOneAndDelete({title: req.body.postID}, (error) => {
    if (error) {
      res.json({ status: "failure", error: error});
    } else {
      res.json({ status: "success"});
    }
  })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


const userInfoSchema = Schema({
    userID: {
      type: Number,
      required: true
    },
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
      type: Number,
      required: true
    },
    posted: {
      type: [Number],
      required: true
    },
    liked: {
      type: [Number],
      required: true
    },
  }, {collection: 'users'}) // Note that within our DB, we are storing these images in a collection called feed. 
  
  const USERINFO = mongoose.model('USERINFO', userInfoSchema)

  app.get("/user/:userID", function (req, res) {
    // TODO: GET "/user/:userID" should return one user by userID
  });

  app.post("/user/add", function (req, res) {
    // POST "/add" adds a post to our database
    const user = new POSTS({
        userID: req.body.userID,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        posted: req.body.posted,
        liked: req.body.liked,
    });
    user.save((error, document) => {
      if (error) {
        res.json({ status: "failure", error: error});
      } else {
        res.json({
          status: "success",
          content: req.body
        });
      }
    })
  });

  app.put("/user/post/:postID", function (req, res) {
    // TODO: PUT "/user/post/:postID" update the posted array of the user
  });

  app.put("/user/like/:postID", function (req, res) {
    // TODO: PUT "/user/like/:postID" update the liked array of the user
  })
  
  app.delete("/user/delete", function (req, res) {
    // DELETE "/delete" deletes a post from a specific user

    // TODO: find user based on userID, then delete post form user's "posted"
    USERINFO.findOneAndDelete({title: req.body.postID}, (error) => {
      if (error) {
        res.json({ status: "failure", error: error});
      } else {
        res.json({ status: "success"});
      }
    })
  });