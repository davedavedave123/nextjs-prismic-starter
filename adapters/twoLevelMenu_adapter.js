import { linkResolver } from '../prismic-configuration';
import { RichText } from 'prismic-reactjs';

const getSubMenuItem = menuItem => {
  const title = RichText.asText(menuItem.sub_nav_link_label);
  const to = linkResolver(menuItem.sub_nav_link);

  return { title, to };
};

const getPrimaryMenuItem = menuItem => {
  const { primary } = menuItem;
  const title = RichText.asText(primary.label);
  const to = primary.link?.type ? linkResolver(primary.link) : '';

  const item = { title, to };

  // check if there are sub links by checking the type of the first one
  if (menuItem.items[0].sub_nav_link?.type)
    item.menuItems = menuItem.items.map(getSubMenuItem);

  return item;
};

export const twoLevelMenu_adapter = prismicMenuItems => {
  if (prismicMenuItems?.data?.nav === undefined) return [];
  const menuItems = prismicMenuItems.data.nav;

  return menuItems.map(getPrimaryMenuItem);

  // Map through each menuItem
  // Extract title and link
  // If there are links in items then send to another
  // map function that will extract those titles and links
};
