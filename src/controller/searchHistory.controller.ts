import { Request, Response } from "express";
import {
  clearSearchHistory,
  createSearchHistory,
  getSearchHistory,
} from "../service/searchHistory.service";

export const getSearchHistoryController = async (
  req: Request,
  res: Response
) => {
  // get 'query' queryParam from url
  const { query } = req.query;
  const searchHistory = await getSearchHistory(query?.toString());
  res.status(200).json(searchHistory);
};

export const postSearchHistoryController = async (
  req: Request,
  res: Response
) => {
  const { search } = req.body;
  await createSearchHistory(search);
  res.status(201).json(true);
};

export const deleteSearchHistoryController = async (
  req: Request,
  res: Response
) => {
  await clearSearchHistory();
  res.status(201).json(true);
};
