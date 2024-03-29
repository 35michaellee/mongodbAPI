import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";


const router= express.Router();

//create new grades 
router.post("/", async (req,res) => {

    let collection= db.collection('grades');
    let newDocument=req.body.document;

    if(newDocument.student_id){
        newDocument.learner_id=newDocument.student_id
        delete newDocument.student_id
    }
    let result= await collection.insertOne(newDocument)
    res.send(result).status(404)
})
// Get a single grade entry
router.get("/:id", async (req, res) => {
    let collection = await db.collection('grades')
    let query = {_id: new ObjectId(req.params.id)}
    let result = await collection.findOne(query)

    // minor error handling
    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})

// Get a student's grade data
router.get("/student/:id", async (req, res) => {
    let collection = await db.collection("grades")
    let query = {student_id: Number(req.params.id)}
    let result = await collection.find(query).toArray()

    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})
//hello world
router.get("/class/:id", async (req, res) => {
    let collection = await db.collection("grades")
    let query = {class_id: Number(req.params.id)}
    let result = await collection.find(query).toArray()

    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
})


export default router ;