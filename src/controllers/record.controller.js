const Record = require("../models/record.model");

// CREATE RECORD
exports.createRecord = async (req, res, next) => {
  try {
    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(record);
  } catch (err) {
    next(err);
  }
};

// GET RECORDS (FILTER SUPPORT)
exports.getRecords = async (req, res, next) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const records = await Record.find(filter);

    res.json(records);
  } catch (err) {
    next(err);
  }
};

// UPDATE RECORD
exports.updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(record);
  } catch (err) {
    next(err);
  }
};

// DELETE RECORD
exports.deleteRecord = async (req, res, next) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Record deleted" });
  } catch (err) {
    next(err);
  }
};