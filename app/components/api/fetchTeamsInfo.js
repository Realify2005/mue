const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchInfo(game) {
    const databaseId = process.env.NOTION_TEAMS_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
        "filter": {
           "property" : "Title",
            "select": {
                "equals" : game
            }
        }
    });

    const indexedData = response.results.map(page => {
        return {
            name: page.properties.Name.title[0]?.plain_text,
            team: page.properties.Team.multi_select.map(team => team.name),
            role: page.properties.Role.multi_select.map(role => role.name), 
            logo: page.properties.Logo.files[0]?.file.url,
        }
    });
    return indexedData;
}

export async function fetchTeamInfo(game, team) {
    const data = await fetchInfo(game);
    const teamInfo = data.filter(player => player.team == team)
    return teamInfo
}