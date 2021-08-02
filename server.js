const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());


// need to have mongoose connection config file
require("./server/config/mongoose.config")

// need to have routes file 
require('./server/routes/pet.routes')(app)



//app.get("/", (req, res) => {
//    res.json({"message": "ok"});
//});

app.listen(port, () => console.log(`Listening on port ${port}`));