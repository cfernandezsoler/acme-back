import sequelize from "../utils/db";

export const findSearchHistoryContainsQueryPaginated = async (
  query?: string
): Promise<string[]> => {
  const [results] = await sequelize.query(
    query
      ? `
    SELECT * FROM search_history WHERE search_term LIKE '%${query}%' AND deleted_at IS NULL ORDER BY created_at DESC LIMIT 10;
  `
      : `
    SELECT * FROM search_history WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 10;
    `
  );

  return results.map((item: any) => item.search_term);
};

export const findSearchHistoryByTerm = async (
  query: string
): Promise<string | null> => {
  const [results]: any = await sequelize.query(`
    SELECT * FROM search_history WHERE search_term = '${query}' AND deleted_at IS NULL;
  `);

  if (results && results.length === 0) return null;
  return results[0]?.search_term;
};

export const saveNewSearchHistory = async (search: string): Promise<void> => {
  await sequelize.query(`
    INSERT INTO search_history (search_term) VALUES ('${search}');
  `);
};

export const deleteAllSearchHistory = async (): Promise<void> => {
  await sequelize.query(`
    UPDATE search_history SET deleted_at = NOW() WHERE deleted_at IS NULL;
  `);
};
