const getAllRecords = require("../services/recordService")

/*
test method to see if everything was working fine
const getMethod = async (req, res) => {
    const records = await getAllRecords()
    res.status(200).send(records)
}
*/
const postMethod = async (req, res) => {
    const records = await getAllRecords(req.body)
    if (records) {
        res.status(200).send({
            code: 0,
            msg: "Success",
            records: records
        })
    }
    else res.status(200).send({
        code: 1,
        msg: "Fail, no records found."
    })
}

module.exports = {
   postMethod
}