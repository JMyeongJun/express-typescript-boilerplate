import { Request, Response } from 'express';
import Joi, { Schema } from 'joi';
import * as userService from './userService';
import api from '../../../util/api';

export interface UserGetListBody {
  username: string;
  birthYear?: number;
  height?: number;
  mobNo?: string;
}

export const getList = async (req: Request, res: Response) => {
  // validate할 schema 정의
  const schema: Schema<UserGetListBody> = Joi.object<UserGetListBody>().keys({
    username: Joi.string().required(),
    birthYear: Joi.number().integer(),
    height: Joi.number().positive(),
    mobNo: Joi.string(),
  });

  // validate
  const { error } = schema.validate(req.body);

  if (error) {
    return api.badRequest(res, error.message);
  }

  const result = await userService.getList(req.body);

  return api.ok(res, result);
};
