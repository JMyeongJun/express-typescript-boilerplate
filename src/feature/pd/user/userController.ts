import { Request, Response } from "express";
import Joi from "joi";
import * as userService from "./userService";


export const getList = async (req: Request, res: Response) => {
	// validate할 schema 정의
	const schema = Joi.object().keys({
		username: Joi.string().min(3).max(30).required(),
		birthyear: Joi.number().integer().min(1900).max(2018),
	});

	// validate
	const { error, value } = schema.validate(req.body);
	const validateError = error?.details[0].message;
	console.log("error: ", error?.details[0].message); // null
	console.log("value: ", value); // {username: "username1"}

	const result = await userService.getList(req.body);

	return res.json(validateError ? { error: validateError } : result);
};