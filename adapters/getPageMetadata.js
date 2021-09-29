import { RichText } from 'prismic-reactjs';
import trimText from '../utils/trimText';

// export const getImagePageMetadata = (doc, defaults = {}) => {
//   let title = doc?.node?.meta_title || RichText.asText(doc?.node?.title || []);
//   let description =
//     doc?.node?.meta_description ||
//     trimText(RichText.asText(doc?.node?.project_description || []), 300);

//   // use defaults passed in if there is not metadata from the doc
//   if (title === '' && defaults?.title) title = defaults.title;
//   if (description === '' && defaults?.description)
//     description = defaults.description;

//   return { title, description };
// };

export const getPageMetadata = (doc, defaults = {}) => {
  let title = doc?.node?.meta_title || '';
  let description = doc?.node?.meta_description || '';

  // use defaults passed in if there is not metadata from the doc
  if (title === '' && defaults?.title) title = defaults.title;
  if (description === '' && defaults?.description)
    description = defaults.description;

  return { title, description };
};
