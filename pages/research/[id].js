import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { useMDXComponents } from '@mdx-js/react'

import { Box } from 'theme-ui'
import { Article, Cite, Endnote, PullQuote } from '@carbonplan/layouts'
import {
  Blockquote,
  Link,
  Colors,
  Figure,
  FigureCaption,
  TableCaption,
} from '@carbonplan/components'

import { articleMetadata, ARTICLES_PATH } from '../../utils/mdx-utils'
import figures from '../../figures'

const COMPONENTS = {
  blockquote: Blockquote,
  Box,
  Link,
  Cite,
  ...Colors,
  Endnote,
  PullQuote,
  Figure,
  FigureCaption,
  TableCaption,
}

const Page = ({ id, source, frontMatter, references }) => {
  const components = useMDXComponents()

  return (
    <Article meta={frontMatter} references={references} displayTitle={null}>
      <MDXRemote
        {...source}
        components={{
          ...components,
          ...COMPONENTS,
          PullQuote: (props) => (
            <PullQuote color={frontMatter.color} {...props} />
          ),
          ...figures[id],
        }}
      />
    </Article>
  )
}

export const getStaticProps = async ({ params }) => {
  const articlePath = path.join(ARTICLES_PATH, `${params.id}/index.md`)
  const source = fs.readFileSync(articlePath)
  const { number, references } = articleMetadata.find((d) => d.id === params.id)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      id: params.id,
      source: mdxSource,
      frontMatter: { ...data, number },
      references,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = articleMetadata
    // Map the path into the static paths object required by Next.js
    .map(({ id }) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}
export default Page
