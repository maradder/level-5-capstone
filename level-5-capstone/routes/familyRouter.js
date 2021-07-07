const express = require("express")
const familyRouter = express.Router()
const Family = require("../models/family.js")



/* const family = [
    {
        "name": "Mom",
        "atHome": false,
        "location": "cafe",
        "ert": 24,
        "_id": "6c85140a-04c1-486a-be4b-bf35b2275ac3"
    },
    {
        "name": "Elizabeth",
        "atHome": false,
        "location": "gym",
        "ert": 32,
        "_id": "f09de8ff-c34d-433b-ae5e-e6fd74f047b0"
    },
    {
        "name": "Avery",
        "atHome": false,
        "location": "trail",
        "ert": 45,
        "_id": "031ae7cc-cd29-42ce-8921-0ab12dbc52a8"
    },
    {
        "name": "Benson",
        "atHome": false,
        "location": "store",
        "ert": 14,
        "_id": "6d714b7d-ec7f-4f64-bd3d-b170bba0847e"
    },
    {
        "name": "Rosalie",
        "atHome": false,
        "location": "work",
        "ert": 13,
        "_id": "faa26d28-8546-404f-b8b6-0b66b555758e"
    }
] */

familyRouter.get("/", (req, res, next) => {
    Family.find((err, family) => {
        if (err) {
            res.status(500)
            return next(err)
        }
	res.status(200).send(family)
})}
)

familyRouter.get("/:familyId", (req, res) => {
    Family.find((err, familyId) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(family)
    })
})

familyRouter.post("/", (req, res, next) => {
    const newFamily = new Family (req.body)
    newFamily.save((err, savedFamily) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedFamily)
    })
})



familyRouter.delete("/:familyId", (req, res, next) => {
    Family.findOneAndDelete({_id: req.params.familyId}, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(deletedItem)
    })
})

familyRouter.put("/:familyId", (req, res, next) => {
    Family.findOneAndUpdate({_id: req.params.familyId},  //find this one and update it
        req.body, //update object with this data
        {new: true}, //send back updated version
        (err, updatedFamily) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedFamily)
        }) 
})



module.exports = familyRouter