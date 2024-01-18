import dotenv from "dotenv";
import express, { Express } from "express";
import searchHistoryRouter from "./routes/searchHistory.routes";

const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/search-history", searchHistoryRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
