const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchEsportsTournaments() {
    const databaseId = process.env.NOTION_ESPORTS_TOURNAMENTS_DATABASE_ID;

    const response = await notion.databases.query({
        database_id: databaseId,
    });

    const tournaments = response.results.map(page => {
        return {
            posterUrl: page.properties.Poster.files[0].file.url,
            tournamentName: page.properties["Tournament Name"].title[0]?.plain_text,
            mode: page.properties.Mode.select?.name,
            game: page.properties.Game.select?.name,
            start: page.properties.Start.date?.start,
            end: page.properties.End.date?.start,
            streamLink: page.properties["Stream Link"].url,
            description: page.properties.Description.rich_text[0]?.plain_text,
        };
    });

    return tournaments;
}
