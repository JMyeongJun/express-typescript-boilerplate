'use strict';

import { Response } from 'express';

const Status = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_ACTION: 405,
  VALIDATION_FAILED: 422,
  SERVER_ERROR: 500,
};

function statusMessage(status: number) {
  switch (status) {
    case Status.BAD_REQUEST:
      return 'Bad Request';
    case Status.UNAUTHORIZED:
      return 'Unauthorized';
    case Status.FORBIDDEN:
      return 'Forbidden';
    case Status.NOT_FOUND:
      return 'Not Found';
    case Status.UNSUPPORTED_ACTION:
      return 'Unsupported Action';
    case Status.VALIDATION_FAILED:
      return 'Validation Failed';
    case Status.SERVER_ERROR:
      return 'Internal Server Error';
  }
}

function jsonResponse(res: Response, body: object, options: any) {
  options = options || {};
  options.status = options.status || Status.OK;
  res.status(options.status).json(body || null);
}

const api = {
  ok: (res: Response, data: object) => {
    jsonResponse(res, data, {
      status: Status.OK,
    });
  },

  badRequest: function (res: Response, errors: string | string[]) {
    errors = Array.isArray(errors) ? errors : [errors];

    const body = {
      message: statusMessage(Status.BAD_REQUEST),
      errors: errors,
    };

    jsonResponse(res, body, {
      status: Status.BAD_REQUEST,
    });
  },

  unauthorized: function (res: Response) {
    const body = {
      message: statusMessage(Status.UNAUTHORIZED),
    };

    jsonResponse(res, body, {
      status: Status.UNAUTHORIZED,
    });
  },

  forbidden: function (res: Response) {
    const body = {
      message: statusMessage(Status.FORBIDDEN),
    };

    jsonResponse(res, body, {
      status: Status.FORBIDDEN,
    });
  },
  notFound: function (res: Response) {
    const body = {
      message: statusMessage(Status.NOT_FOUND),
    };

    jsonResponse(res, body, {
      status: Status.NOT_FOUND,
    });
  },

  serverError: function (res: Response, error: any) {
    if (error instanceof Error) {
      error = {
        message: error.message,
        stacktrace: error.stack,
      };
    }
    const body = {
      message: statusMessage(Status.SERVER_ERROR),
      error: error,
    };

    jsonResponse(res, body, {
      status: Status.SERVER_ERROR,
    });
  },
};

export default api;
