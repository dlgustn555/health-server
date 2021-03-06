const exceutQuery = async (query) => {
  try {
    const data = await query();
    return { success: true, result: { data, error: null } };
  } catch (error) {
    return { success: false, result: { data: null, error } };
  }
};

const query = {
  save: async (model) => {
    try {
      const data = await model.save();
      return { success: true, result: { data, error: null } };
    } catch (error) {
      return { success: false, result: { data: null, error } };
    }
  },

  findOneAndUpdate: async (model, conditions, update, options = {}) => {
    try {
      const data = await model.findOneAndUpdate(conditions, update, {
        new: true,
        upsert: true,
        ...options,
      });
      return { success: true, result: { data, error: null } };
    } catch (error) {
      return { success: false, result: { data: null, error } };
    }
  },

  find: async (model, filter = {}, projection = null, optoins = {}) => {
    try {
      const data = await model.find(filter, projection, optoins);
      return { success: true, result: { data, error: null } };
    } catch (error) {
      return { success: false, result: { data: null, error } };
    }
  },

  findOne: async (model, filter = {}) => {
    try {
      const data = await model.findOne(filter);
      return { success: true, result: { data, error: null } };
    } catch (error) {
      return { success: false, result: { data: null, error } };
    }
  },

  findById: async (model, id, projection = {}) => {
    try {
      const data = await model.findById(id, projection);
      return { success: true, result: { data, error: null } };
    } catch (error) {
      return { success: false, result: { data: null, error } };
    }
  },

  findOneAndDelete: async (model, conditions, options = {}) => {
    try {
      const data = await model.findOneAndDelete(conditions, options);
      return { success: true, result: { data, error: null } };
    } catch (error) {
      return { success: false, result: { data: null, error } };
    }
  },
};

module.exports = query;
