import { linkResolver } from '../prismic-configuration';
import { RichText } from 'prismic-reactjs';

const getPost = post => ({
  to: linkResolver(post),
  title: RichText.asText(post.data.title),
  image: post.data.featured_image,
  text: post.data.content[0].text,
});

const taggedPostsLinks_adapter = posts => posts.map(getPost);

export default taggedPostsLinks_adapter;
