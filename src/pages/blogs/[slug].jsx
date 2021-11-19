import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import Container from '../../components/_layout/container';

import { BLOGS_PATH, blogFilePaths } from '../../helper';

const Slug = ({ source, frontMatter }) => {
  return (
    <Container>
      <article className="prose lg:prose-xl">
        <h1>{frontMatter?.title}</h1>
        <MDXRemote {...source} />
      </article>
    </Container>
  );
};

export const getStaticProps = async ({ params }) => {
  const blogFilePaths = path.join(BLOGS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(blogFilePaths);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = blogFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Slug;
