const Pet = require('../models/Pet.model')


module.exports.findAllPets = (req, res) => {
    console.log("logging Pet--->", Pet)
    Pet.find()
        .then(allPets => {
            console.log("****TRYING TO FIND ALL OF THE PETS****")
            res.json({ results: allPets })
        })

        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createPet= (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            console.log("*/*/ CREATING Pet */*/")
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.randomPet = (req, res) => {
Pet.find()
    .then(allPet => {
        console.log("*/*/ FINDING RANDOM Pet */*/")
        let maxindex = allPet.length
        console.log(Math.random(maxindex))
        function GetRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let randomNum = GetRandomInt(maxindex)
        console.log("random index it is", randomNum)
        res.json({ results: allPet[randomNum] })
    })
    .catch()
}

module.exports.findAnPet = (req, res) => {
    Pet.findOne({ _id: req.params.petid })
        .then(onePet => {
            console.log("*/*/ FINDING Pet */*/")
            res.json({ results: onePet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPet= (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            console.log("*/*/ CREATING Pet*/*/")
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.petid },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            console.log("*/*/ UPDATING PET */*/")
            res.json({ user: updatedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deletePet = (req, res) => {
    console.log("hit the delete function with this request.params", req.params )
    Pet.deleteOne({ _id: req.params.petid })
        .then(result => {
            console.log("*/*/ GETTING RID OF THIS  Pet */*/")
            res.json({ result: result })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.findOneThing = (req,res)=>{
    Product.findOne({_id: req.params.petid})
        .then(onePet => res.json({results: onePet}))
        .catch(err => res.json(err))
}
