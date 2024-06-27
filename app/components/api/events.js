const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchNotionDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId });

  const indexedData = response.results.map(page => ({
    time: page.properties.Time.formula,
    affiliatedThirdParties: page.properties['Affiliated Third Parties'].rich_text[0].plain_text,
    tags: page.properties.Tags.multi_select.map(tag => tag.name),
    location: page.properties.Location.rich_text[0].plain_text,
    finalised: page.properties.Finalised.checkbox,
    date: page.properties.Date.date.start,
    posterUrl: page.properties.Poster.files[0].file.url,
    name: page.properties.Name.title[0]?.plain_text,
    url: page.url,
    publicUrl: page.public_url
  }));

  return indexedData;
}
