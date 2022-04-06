const serverMessage = {
  200: "OK",
  201: "Created",
  202: "No content",
  400: "Bad request",
  401: "Unauthorized",
  402: "Payment is required",
  403: "Forbidden",
  404: "The server can not find the requested resource.",
  500: "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  501: "The HTTP method is not supported by the server and cannot be handled.",
  502: "Bad Gateway",
};

const statusSuccess = {
  success: 200,
  created: 201,
  accepted: 202,
};

const statusError = {
  badRequest: 400,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
};

const serverError = {
  internal: 500,
  notImplemented: 501,
  badGateway: 202,
};

exports.module = { serverMessage, statusSuccess, statusError, serverError };
