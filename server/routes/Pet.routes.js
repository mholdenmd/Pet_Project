const petController = require('../controllers/pet.controller')


module.exports = app => {
    app.get("/api/pets/all", petController.findAllPets);
    app.post("/api/pet/create", petController.createPet);
    app.get("/api/pet/random", petController.randomPet);
    app.get("/api/pet/:petid", petController.findAnPet);
    app.put("/api/pet/update/:petid", petController.updatePet)
    app.delete("/api/pet/delete/:petid", petController.deletePet)


}