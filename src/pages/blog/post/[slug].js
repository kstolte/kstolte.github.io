import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Typography } from '@mui/material';

import { getPostBySlug, getAllPosts } from 'util/blog-processing/api';
import { markdownToHtml } from 'util/blog-processing/markdownToHTML';

import HeroSection2 from 'components/HeroSection2';
import PostBody from 'components/LongContent';
import Container from 'components/Section';

// type Props = {
//   post: PostType
//   morePosts: PostType[]
//   preview?: boolean
// }
//export default function Post({ post, morePosts, preview }: Props) {

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      {router.isFallback ? (
        <Typography>Loading…</Typography>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | Next.js Blog Example with</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <HeroSection2
              bgColor="primary"
              size="large"
              bgImage={post.coverImage}
              bgImageOpacity={0.2}
              title={post.title}
              subtitle={`${new Date(post.date).toLocaleDateString()}`}
            />
            <PostBody>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </PostBody>
          </article>
        </>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
