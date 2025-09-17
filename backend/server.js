import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js'
import authMiddleware from './middleware/auth.js'
import cron from 'node-cron'
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'
import passport from 'passport'
import session from 'express-session'
import './config/passport.js'

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SESSION_SECRET || 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// CONNECT TO DB
connectDB();

// ROUTES

app.get('/', (req, res) => {
    res.send('API is running....');
})
app.use('/api/user', userRouter);
app.use('/api/tasks', taskRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})
