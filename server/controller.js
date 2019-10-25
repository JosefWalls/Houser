let property = []

function addPropertyDetails (req, res){
    const {name, address, city, state, zip, image} = req.body
    property.push(name, address, city, state, zip);
}

function addPropertyImage(req, res){
    const {image} = req.body;
    property.push(image)
}

function addMortgage(req, res){
    const {Mortgage, Rent} = req.body
    property.push(Mortgage, Rent)
    let finalProperty = []
    const db = req.app.get("db")
    db.add_property(property[0], property[1], property[2], property[3], property[4], property[5] , property[6], property[7])
    .then(response => {
        console.log("worked")
    })
    .catch(error => {
        console.log("not worked")
    })
}

function allProperties(req, res){
    const db = req.app.get("db");
    console.log(property)
    db.get_properties(property)
    .then(response => {
        res.status(200).json(response)
        console.log("get")
    })
    .catch(error => {
        res.status(404).json("Nope fam")
    })
    return property = []
}

function deleteProperty(req, res){
    const db = req.app.get("db");
    const {id} = req.params
    db.delete_property(id)
    .then(response => {
        res.status(200).json(response)
        console.log("deletr work")
    })
    .catch(error => {
        res.status(451).json(error)
    })
}

module.exports = {
    addPropertyDetails,
    addPropertyImage,
    addMortgage,
    allProperties,
    deleteProperty
}