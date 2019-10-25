require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express();
const {addPropertyDetails, allProperties, addPropertyImage, addMortgage, deleteProperty} = require("./controller")

app.use(express.json());

massive(process.env.CONNECTION_sTRING)
.then(dbInstance => {
    app.set("db", dbInstance)
    console.log("DB Connected")
})
.catch( error => {
    console.log(error)
})
app.post("/api/properties", addPropertyDetails)
app.post("/api/properties/image", addPropertyImage)
app.post("/api/properties/mortgage", addMortgage)
app.get("/api/properties", allProperties)
app.delete("/api/properties/:id", deleteProperty)
app.listen(4020, () => console.log("Port 4020"))