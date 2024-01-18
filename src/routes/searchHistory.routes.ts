import { Router } from "express";
import {
  deleteSearchHistoryController,
  getSearchHistoryController,
  postSearchHistoryController,
} from "../controller/searchHistory.controller";

const searchHistoryRouter = Router();

searchHistoryRouter.get("/", getSearchHistoryController);
searchHistoryRouter.post("/new", postSearchHistoryController);
searchHistoryRouter.delete("/clear", deleteSearchHistoryController);

export default searchHistoryRouter;
