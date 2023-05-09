const info = require('../model/info.model.js')

const getInfo = async(req,res) => {
    try {
        const allInfo = await info.find();
        const allInfoInDetail = [];
        allInfo.forEach( (info) => {
        allInfoInDetail.push({
            id: info._id,
            intensity: info.intensity,
            likelihood: info.likelihood,
            relevance: info.relevance,
            year: {
                start_year:info.start_year,
                end_year: info.end_year
            },
            counrty: info.country,
            topic: info.topic,
            region: info.region,
            city: info.city
            })
        })
        
        return res.status(200).json({message:'Ok', data: allInfoInDetail})
    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}

module.exports = {getInfo}