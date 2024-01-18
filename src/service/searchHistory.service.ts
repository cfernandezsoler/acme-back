import {
  deleteAllSearchHistory,
  findSearchHistoryByTerm,
  findSearchHistoryContainsQueryPaginated,
  saveNewSearchHistory,
} from "../repository/searchHistory.repository";

export const getSearchHistory = async (query?: string) => {
  return await findSearchHistoryContainsQueryPaginated(query);
};

export const createSearchHistory = async (search: string) => {
  if ((await findSearchHistoryByTerm(search)) != null) return; // if search term already exists, do nothing
  await saveNewSearchHistory(search);
};

export const clearSearchHistory = async () => {
  await deleteAllSearchHistory();
};
