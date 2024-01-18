import { Router } from 'express';
import { getSearchHistory } from '../service/searchHistory.service';

const searchHistoryRouter = Router();

searchHistoryRouter.get('/', getSearchHistory);
