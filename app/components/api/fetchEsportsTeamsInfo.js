const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchEsportsTeamsInfo(game) {
    const databaseId = process.env.NOTION_ESPORTS_TEAMS_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        "filter": {
           "property" : "Game",
            "select": {
                "equals" : game
            }
        }
    });

    const indexedData = response.results.map(page => {
        return {
            name: page.properties.Name.title[0]?.plain_text,
            discord: page.properties["Discord ID"].rich_text[0].plain_text,
            gamerTag: page.properties["Gamer Tag"].rich_text[0].plain_text,
            game: page.properties.Game.select?.name,
            team: page.properties.Team.multi_select.map(team => team.name),
            role: page.properties.Role.multi_select.map(role => role.name), 
            logo: page.properties.Logo.files[0]?.file.url,
        }
    });
    return indexedData;
}