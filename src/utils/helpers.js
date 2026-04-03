exports.success = (res, data, message = "Success") => {
  return res.status(200).json({ message, data });
};

exports.error = (res, message = "Error", status = 500) => {
  return res.status(status).json({ message });
};