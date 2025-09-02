import express from 'express';
import { createNote, deleteNote, getAllNotes, updateNotes, getNoteById } from '../controllers/notesController.js';

const router = express.Router();

// get a single note by id
router.get("/:id", getNoteById);

//send the notes to the frontend
router.get("/", getAllNotes);

//create a new note
router.post("/", createNote);

//update a note
router.put("/:id", updateNotes);

//delete a note
router.delete("/:id", deleteNote);

export default router;