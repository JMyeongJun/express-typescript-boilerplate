import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

// Parse RequestBody
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Cross-Origin-Resouce-Sharing
app.use(cors());

app.get("/", (req, res, next) => {
	res.send(`Hell1o2: ${process.env.PORT}`);
});

app.post("/test", (req, res, next) => {
	console.log(req.body);
	res.status(400).json({ ...req.body, error: 401 });
});

app.listen(process.env.PORT, () => {
	console.log(`Server running on Port:${process.env.PORT}`);
});
