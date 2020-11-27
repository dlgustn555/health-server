const query = {
    findOneAndUpdate: async (model, conditions, update, options = {}) => {
        try {
            const data = await model.findOneAndUpdate(conditions, update, {
                new: true,
                upsert: true,
                ...options
            })
            return {success: true, result: {data, error: null}}
        } catch (error) {
            return {success: false, result: {data: null, error}}
        }
    }
}

module.exports = query
