const express = require('express');
const { authUserToken } = require('./middlewares/AuthMiddleware');
const { validatePostFields, validatePutFields } = require('./middlewares/PostMiddleware');
const { validateEmail } = require('./middlewares/EmailMiddleware');
const { validateName } = require('./middlewares/NameMiddleware');
const { validatePassword } = require('./middlewares/PasswordMiddleware');
const { signin } = require('./controllers/Login');
const { newPost,
  getAllPostsAndUsers,
  getPostsById,
  updatePost,
  deletePost,
  searchPosts,
} = require('./controllers/PostController');

const { getAllUsers,
  newUser,
  getUserById,
  userDeleteSelf } = require('./controllers/UserController'); 

const { getAllCategories, validateCategoryFields } = require('./controllers/CategoryController'); 
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', signin);

app.put('/post/:id', authUserToken, validatePutFields, updatePost);

app.post('/post', authUserToken, validatePostFields, newPost);

app.get('/post/search', authUserToken, searchPosts);

app.get('/post/', authUserToken, getAllPostsAndUsers);

app.get('/post/:id', authUserToken, getPostsById);

app.delete('/post/:id', authUserToken, deletePost);

app.delete('/user/me', userDeleteSelf);

app.get('/user', getAllUsers);

app.post('/user', validateName, validatePassword, validateEmail, newUser);

app.get('/user/:id', authUserToken, getUserById);

app.get('/categories', authUserToken, getAllCategories);

app.post('/categories', authUserToken, validateCategoryFields);

// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
