const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchNotionDatabase() {
  const timestamp = Date.now();
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId, timestamp });

  const indexedData = response.results
    .filter(page => page.properties.Finalised.checkbox)
    .map(page => ({
      affiliatedThirdParties: page.properties['Affiliated Third Parties'].rich_text[0].plain_text,
      tags: page.properties.Tags.multi_select.map(tag => tag.name),
      location: page.properties.Location.rich_text[0].plain_text,
      finalised: page.properties.Finalised.checkbox,
      date: page.properties.Start.date.start,
      posterUrl: page.properties.Poster.files[0].file.url,
      duration: page.properties.Duration.formula.string,
      name: page.properties.Name.title[0]?.plain_text,
      instagramLink: page.properties['Instagram Link'].url
    }));

  return indexedData;
}