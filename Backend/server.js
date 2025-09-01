import express from 'express';

const app = express();

app.listen(5001, ()=> {
    console.log("Server is running on port: 5001");
});

//send the notes to the frontend
app.get("/api/notes", (req, res)=>{
    res.status(200).send("You got 5 notes");
});

//create a new note
app.post("/api/notes", (req, res)=>{
    res.status(201).json({message: "Note created successfully" });
});

//update a note
app.put("/api/notes/:id", (req, res)=>{
    res.status(200).json({message: "Note updated successfully" });
});

//delete a note
app.delete("/api/notes/:id", (req, res)=>{
    res.status(200).json({message: "Note deleted successfully" });
});