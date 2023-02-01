import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res, next) => {
	res.send(`Hell1o2: ${process.env.PORT}`);
});

app.listen(5000, () => {
	console.log("Server running on Port:5000");
});

const hello = (msg: string) => {
	console.log(msg);
	console.log(
		"alsdkfjasdfasdfasdfasdfasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa, msg, msg, msg",
	);
};
