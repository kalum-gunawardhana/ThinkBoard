import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import cros from 'cors';

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

//middleware to parse JSON request bodies
app.use(
    cros({
        origin: "http://localhost:5173"
    }));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});