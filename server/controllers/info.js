const info = require('../model/info.model.js')

const getInfo = async(req,res) => {
    try {
        const allInfo = await info.find();
        const allInfoInDetail = [];
        allInfo.forEach( (info) => {
        allInfoInDetail.push({
            _id: info._id,
            intensity: info.intensity,
            likelihood: info.likelihood,
            relevance: info.relevance,
            impact: info.impact,
            start_year:info.start_year,
            end_year: info.end_year,
            topic_title: info.title,
            topic_name: info.topic,
            topic_sector: info.sector,
            topic_insights: info.insight,
            topic_url: info.url,
            topic_pestle: info.pestle,
            topic_source: info.source,
            region: info.region,
            city: info.city,
            country: info.country,
            addedOn: info.added,
            publishedOn: info.published,
            })
        })
        
        // return res.status(200).json({message:'Ok', data: allInfoInDetail})
        return res.status(200).json(allInfoInDetail)

    } catch (error) {
        res.status(404).json({message:error.message})
    }    
}

module.exports = {getInfo}