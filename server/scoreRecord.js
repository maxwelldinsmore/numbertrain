import express from 'express';
import dbConn from './connect.js';

import {ObjectId} from 'mongodb';

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await dbConn.collection("scoreRecord");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
  });

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await dbConn.collection("scoreRecord");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});


export default router;