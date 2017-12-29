# Contentful Usage Docs

Contentful is a headless CMS that provides a simple platform to manage content and media for any digital product.

## Core Concepts

**Space**: This is where everything is stored, from the editor accounts to the content itself.
**Content Model**: This is how developers define the editor experience and what fields are available to edit.
**Content**: Any words or media that are added by an editor.
**Entry**: Every instance of a content model that is created is called an Entry.
**Media**: Photos or video that are uploaded to Contentful and embedded within content.

## Creating a new page

Creating a new webpage in our Contentful setup is fairly straight forward. 

1. In the content tab, click "Add entry" on the right hand side of the menu bar and select "Page".
2. Give the page a unique title, and change the slug field if you prefer something else. The slug is simply the URL of the page, eg: `/action`.
3. Add the header and the footer to the page. Unless you want to do anything different, just re-use the existing content by clicking "Link Existing entries" and selecting them.
4. Finally, add modules! Modules are the core pieces of the page that you can add or modify. The section below will document in more detail, but to get started try adding a "Content" module. Click "Create new entry and link" under the Modules section, and select "Content". 
5. You should now be presented with a page to edit the Content module. Start by giving it an internal title, this should be a unique name that describes what this module is for. After that, edit the markdown text and click the "Publish button". Once published, click the back button in the top left of the menu bar and publish the entire page as well.

After a few seconds you should see your new page live on site at the URL you specified, along with the content module you created.

## Modules in-depth
_....coming soon_
