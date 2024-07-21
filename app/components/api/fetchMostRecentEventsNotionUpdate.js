import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchMostRecentEventsNotionUpdate() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        timestamp: 'last_edited_time',
        direction: 'descending',
      },
    ],
    page_size: 1,
  });

  const mostRecentPage = response.results[0];
  return mostRecentPage ? mostRecentPage.last_edited_time : null;
}
