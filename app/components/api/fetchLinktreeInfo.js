const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchLinktreeLayout() {
    const databaseId = process.env.NOTION_LINKTREE_SECTION_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    const indexedResults = response.results.map(page => {
        return {
            name: page.properties['Section Name'].title[0].plain_text,
            display_name: page.properties.displaySectionName.checkbox,
            position: page.properties.sectOrdering.number,
            type: page.properties.Type.select.name,
            section_id: page.id,
        };
    })
    .sort((a, b) => a.position - b.position);

    return indexedResults;
}

export async function fetchLinktreeData() {
    const databaseId = process.env.NOTION_LINKTREE_LINKS_DATABASE_ID;
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    const indexedResults = response.results.map(page => {
        return {
        name: page.properties.Name.title[0].plain_text,
        position: page.properties.itemOrdering.number,
        link: page.properties.Link.url,
        section: page.properties.Section.relation[0].id
        };
    });
    return response.results;
}