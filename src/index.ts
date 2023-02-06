import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pdRouter from './feature/pd/pdRouter';

const app = express();
dotenv.config();

// Parse RequestBody
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cross-Origin-Resouce-Sharing
app.use(cors());

// Add routes
app.use(process.env.API_V1 + '/feature/pd', pdRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port:${process.env.PORT}`);
});
