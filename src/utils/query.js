const exceutQuery = async (query) => {
    try {
        const data = await query()
        return {success: true, result: {data, error: null}}
    } catch (error) {
        return {success: false, result: {data: null, error}}
    }
}

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
    },
    find: async (model, filter = {}) => {
        try {
            const data = await model.find(filter)
            return {success: true, result: {data, error: null}}
        } catch (error) {
            return {success: false, result: {data: null, error}}
        }
    },
    findOne: async (model, filter = {}) => {
        try {
            const data = await model.findOne(filter)
            return {success: true, result: {data, error: null}}
        } catch (error) {
            return {success: false, result: {data: null, error}}
        }
    }
}

module.exports = query
