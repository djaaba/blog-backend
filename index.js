import express from 'express'; // в package.json указываем 'module'
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';

import { registerValidation, loginValidation } from './validations/auth.js';
import { register, login, getMe } from './controllers/UserController.js';

import checkAuth from './utils/checkAuth.js';

import { postCreateValidation } from './validations/post.js';
import { create, getAll, getOne, remove, update, getTags } from './controllers/PostController.js';

import handleValidationErrors from './utils/handleValidationErrors.js';

mongoose.set("strictQuery", false);
mongoose
    .connect('mongodb+srv://admin:12345@cluster0.aq7myby.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log("DB OK"))
    .catch((err) => console.log("DB ERROR", err))

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => { // returns file destination
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => { // returns original file name
        cb(null, file.originalname)
    },
});

const upload = multer({ storage })

app.use(express.json()) // позволяет читать json
app.use(cors());
app.use('/uploads', express.static('uploads'))

app.post('/auth/login', loginValidation, handleValidationErrors, login);
app.post('/auth/register', registerValidation, handleValidationErrors, register);
app.get('/auth/me', checkAuth, getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.get('/posts/tags', getTags)

app.get('/posts', getAll);
app.post('/posts', checkAuth, postCreateValidation, handleValidationErrors, create);
app.get('/tags', getTags)
app.get('/posts/:id', getOne);
app.delete('/posts/:id', checkAuth, remove);
app.patch('/posts/:id', postCreateValidation, checkAuth, handleValidationErrors, update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    return console.log('OK')
});