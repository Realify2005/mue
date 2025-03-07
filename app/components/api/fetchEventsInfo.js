const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchEventsInfo() {
  const databaseId = process.env.NOTION_EVENTS_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId});
  const indexedData = response.results
    .filter(page => page.properties.Finalised.checkbox)
    .map(page => {
      const affiliatedThirdPartiesRichText = page.properties['Affiliated Third Parties'].rich_text;
      const affiliatedThirdParties = affiliatedThirdPartiesRichText.length > 0 
        ? affiliatedThirdPartiesRichText[0].plain_text || "none"
        : "none";

      return {
        affiliatedThirdParties,
        tags: page.properties.Tags.multi_select.map(tag => tag.name),
        location: page.properties.Location.rich_text[0].plain_text,
        finalised: page.properties.Finalised.checkbox,
        date: page.properties.Start.date.start,
        posterUrl: page.properties.Poster.files[0].file.url,
        duration: page.properties.Duration.formula.string,
        name: page.properties.Name.title[0]?.plain_text,
        externalLink: page.properties['External Link'].url
      };
    });

  return indexedData;
}