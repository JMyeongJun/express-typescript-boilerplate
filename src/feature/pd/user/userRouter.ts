import express from "express";

import * as userController from "./userController";

const router = express.Router();

router.post("/getList", userController.getList);

export default router;