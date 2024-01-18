import { findSearchHistoryPaginated } from '../repository/searchHistory.repository';

export const getSearchHistory = async () => {
  return await findSearchHistoryPaginated();
};
