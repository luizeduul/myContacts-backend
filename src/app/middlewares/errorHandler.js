module.exports = (error, request, response, next) => {
  console.error(error);
  response.sendStatus(500);
};
