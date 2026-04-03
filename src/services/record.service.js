const Record = require("../models/record.model");

// CREATE RECORD
exports.createRecordService = async (data, userId) => {
  return await Record.create({
    ...data,
    createdBy: userId,
  });
};

// GET RECORDS (FILTER)
exports.getRecordsService = async (query) => {
  const { type, category, startDate, endDate } = query;

  let filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  return await Record.find(filter).sort({ date: -1 });
};

// UPDATE RECORD
exports.updateRecordService = async (id, data) => {
  return await Record.findByIdAndUpdate(id, data, { new: true });
};

// DELETE RECORD
exports.deleteRecordService = async (id) => {
  return await Record.findByIdAndDelete(id);
};