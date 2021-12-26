const Record = require("../models/Record");

const getAllRecords = async (body) => {
    const {startDate, endDate, minCount, maxCount} = body;
    const records =  await Record.aggregate([
        // which fields should be seen (0 for false, 1 for true, $sum will add items in counts to eachother)
        {
            $project: {
                _id : 0,
                key: 1,
                createdAt: 1,
                totalCount: {
                    $sum: "$counts"
                }
            },
        },
        // query for date and count
        {
            $match: {
                // should be between startDate and endDate ($gte = greater than or equal, $lte: less than or equal)
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                },
                totalCount: {
                    $gte: minCount,
                    $lte: maxCount
                }
            }
        }
    ]);
    return records
}

module.exports = getAllRecords;