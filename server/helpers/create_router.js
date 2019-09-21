const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const createRouter = function (collection) {
 const router = express.Router();

// index

 router.get('/', (req, res) => {
   collection
     .find()
     .toArray()
     .then((docs) => res.json(docs))
     .catch((err) => {
       console.error(err);
       res.status(500);
       res.json({ status: 500, error: err });
     });
 });

 // show

 router.get('/:id', (req, res) => {
   const id = req.params.id;
   collection
     .findOne({ _id: ObjectID(id) })
     .then((doc) => res.json(doc))
     .catch((err) => {
       console.error(err);
       res.status(500);
       res.json({ status: 500, error: err });
     });
 });
// delete
 
 router.delete('/:id', (req, res) => {
   const id = req.params.id;
   collection
     .deleteOne({ _id: ObjectID(id) })
     .then(() => collection.find().toArray())
     .then((docs) => res.json(docs))
     .catch((err) => {
       console.error(err);
       res.status(500);
       res.json({ status: 500, error: err });
     });
 });

 // add

 router.post('/', (req, res) => {
   const newData = req.body;
   collection
   .insertOne(newData)
   .then((result) => {
     res.json(result.ops[0])
   })
   .catch((err) => {
     console.error(err);
     res.status(500);
     res.json({ status: 500, error: err });
   });
 });
 return router;
};
module.exports = createRouter;
