import sequelize from '../utils/db';

export const findSearchHistoryPaginated = async (): Promise<string[]> => {
  const response = await sequelize.query(`
    SELECT * FROM search_history LIMIT 10 ORDER BY search_term ASC;
  `);

  return response.map((item: any) => item.search_term);
};
