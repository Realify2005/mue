const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchEsportsAchievements() {
    const databaseId = process.env.NOTION_ESPORTS_ACHIEVEMENTS_DATABASE_ID;
    
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    const achievements = response.results.map(page => {
        return {
            medal: page.properties.Medal.select?.name,
            tournament: page.properties.Tournament.title[0]?.plain_text,
            placement: page.properties.Placement.select?.name,
            category: page.properties.Category.select?.name,
            period: page.properties.Period.select?.name,
        };
    });

    return achievements;
}
