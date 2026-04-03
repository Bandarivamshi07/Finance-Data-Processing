const Record = require("../models/record.model");

// TOTAL INCOME
exports.totalIncome = async (req, res, next) => {
  try {
    const result = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({ totalIncome: result[0]?.total || 0 });
  } catch (err) {
    next(err);
  }
};

// TOTAL EXPENSE
exports.totalExpense = async (req, res, next) => {
  try {
    const result = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({ totalExpense: result[0]?.total || 0 });
  } catch (err) {
    next(err);
  }
};

// NET BALANCE
exports.netBalance = async (req, res, next) => {
  try {
    const income = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const expense = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const net =
      (income[0]?.total || 0) - (expense[0]?.total || 0);

    res.json({ netBalance: net });
  } catch (err) {
    next(err);
  }
};