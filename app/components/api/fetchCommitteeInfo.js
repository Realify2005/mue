const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });

export async function fetchCommitteeInfo() {
  const databaseId = process.env.NOTION_COMMITTEE_DATABASE_ID;
  const response = await notion.databases.query({ 
    database_id: databaseId,
    "filter": {
      "and" : [
        {
          "property": "Department",
          "multi_select": {
            "does_not_contain": "Old Executive"
          }
        },
        {
          "property": "Department",
          "multi_select": {
            "does_not_contain": "Past Commitee"
          }
        }
      ]
    }
  });

  const indexedData = response.results
    .filter(page => page.properties.Show.checkbox)
    .map(page => {
      return {
        name: page.properties.Name.title[0]?.plain_text,
        image: page.properties.Photo.files[0].file?.url,
        department: page.properties.Department.multi_select.map(department => department.name),
        role: page.properties.Role.select?.name,
        about: page.properties.About.rich_text[0]?.plain_text,
        discord: page.properties.Discord.rich_text[0]?.plain_text,
      };
    });

  return indexedData;
}

export async function fetchOldCommitteeInfo() {
  const databaseId = process.env.NOTION_COMMITTEE_DATABASE_ID;
  const response = await notion.databases.query({ 
    database_id: databaseId,
    "filter": {
      "or" : [
        {
          "property": "Department",
          "multi_select": {
            "contains": "Old Executive"
          }
        },
        {
          "property": "Department",
          "multi_select": {
            "contains": "Past Commitee"
          }
        }
      ]
    }
  });
  const indexedData = response.results
    .filter(page => page.properties.Show.checkbox)
    .map(page => {
      return {
        name: page.properties.Name.title[0]?.plain_text,
        image: page.properties.Photo.files[0].file?.url,
        department: page.properties.Department.multi_select.map(department => department.name),
        role: page.properties.Role.select?.name,
        about: page.properties.About.rich_text[0]?.plain_text,
        discord: page.properties.Discord.rich_text[0]?.plain_text,
      };
    });
  
    console.log(indexedData);
    return indexedData;
}