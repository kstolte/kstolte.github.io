import Link from 'next/link';
import Head from 'next/head';

import { Typography, Container } from '@mui/material';

import { getAllPosts } from 'util/blog-processing/api';

const PostBlurb = ({ post }) => (
  <>
    <Typography variant="h5">
      <Link href={`/blog/post/${post.slug}`} legacyBehavior>{post.title}</Link>
    </Typography>
    <Typography variant="caption">{post.excerpt}</Typography>
  </>
);
export default function IndexPage({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Next.js Blog Example with</title>
      </Head>
      <Container>
        <Typography variant="h3">Latest Post</Typography>
        {<PostBlurb post={heroPost} />}
        <Typography variant="h4">MorePosts</Typography>
        {morePosts.map((v) => {
          return <PostBlurb key={v.slug} post={v}></PostBlurb>;
        })}
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
