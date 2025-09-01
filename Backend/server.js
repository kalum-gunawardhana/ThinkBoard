import express from 'express';

const app = express();

app.listen(5001, ()=> {
    console.log("Server is running on port: 5001");
});

//send the notes to the frontend
app.get("/api/notes", (req, res)=>{
    res.send("you got 5 notes");
});