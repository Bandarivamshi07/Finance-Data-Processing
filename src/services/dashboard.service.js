const Record = require("../models/record.model");

// TOTAL INCOME
exports.getTotalIncome = async () => {
  const result = await Record.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return result[0]?.total || 0;
};

// TOTAL EXPENSE
exports.getTotalExpense = async () => {
  const result = await Record.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return result[0]?.total || 0;
};

// NET BALANCE
exports.getNetBalance = async () => {
  const income = await exports.getTotalIncome();
  const expense = await exports.getTotalExpense();

  return income - expense;
};

// CATEGORY-WISE SUMMARY
exports.getCategorySummary = async () => {
  return await Record.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);
};

// MONTHLY SUMMARY
exports.getMonthlySummary = async () => {
  return await Record.aggregate([
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$amount" },
      },
    },
    { $sort: { "_id": 1 } },
  ]);
};