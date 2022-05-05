import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useMDXComponents } from '@mdx-js/react'

import { Box } from 'theme-ui'
import {
  Article,
  Cite,
  Endnote,
  PullQuote,
  Sidenote,
  Supplement,
} from '@carbonplan/layouts'
import {
  Blockquote,
  Link,
  Colors,
  Figure,
  FigureCaption,
  Table,
  TableCaption,
} from '@carbonplan/components'

import {
  articleMetadata,
  supplementMetadata,
  ARTICLES_PATH,
} from '../../utils/mdx'
import { displayTitles, articleComponents } from '../../components/mdx'

const ARTICLE_COMPONENTS = {
  blockquote: Blockquote,
  Box,
  Link,
  Cite,
  ...Colors,
  Endnote,
  PullQuote,
  Sidenote,
  Figure,
  FigureCaption,
  Table,
  TableCaption,
}

const SUPPLEMENT_COMPONENTS = {
  blockquote: Blockquote,
  Box,
  Link,
}

const Page = ({ articleId, type, source, frontMatter, references }) => {
  const components = useMDXComponents()

  switch (type) {
    case 'article':
      return (
        <Article
          meta={frontMatter}
          references={references}
          displayTitle={displayTitles[articleId]}
        >
          <MDXRemote
            {...source}
            components={{
              ...components,
              ...ARTICLE_COMPONENTS,
              PullQuote: (props) => (
                <PullQuote color={frontMatter.color} {...props} />
              ),
              ...articleComponents[articleId],
            }}
          />
        </Article>
      )
    case 'supplement':
      return (
        <Supplement meta={frontMatter} back={frontMatter.back}>
          <MDXRemote
            {...source}
            components={{
              ...components,
              ...SUPPLEMENT_COMPONENTS,
              ...articleComponents[articleId],
            }}
          />
        </Supplement>
      )
    default:
      throw new Error(
        `Unexpected page type: ${type}. Must be one of: 'article', 'supplement'.`
      )
  }
}

export const getStaticProps = async ({ params }) => {
  let type
  let metadata = articleMetadata.find((d) => d.id === params.id)
  if (metadata) {
    type = 'article'
  } else {
    metadata = supplementMetadata.find((d) => d.id === params.id)
    type = 'supplement'
  }

  if (!metadata) {
    throw new Error(`No metadata found for id: ${params.id}`)
  }

  const source = fs.readFileSync(path.join(ARTICLES_PATH, metadata.path))

  const { content, data } = matter(source)

  // Omit components paths from metadata passed to page
  const { components, ...rest } = data

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: rest,
  })

  return {
    props: {
      articleId: metadata.articleId ?? params.id,
      type,
      source: mdxSource,
      frontMatter: { ...rest, number: metadata.number ?? 0 },
      references: metadata.references ?? {},
    },
  }
}

export const getStaticPaths = async () => {
  const articlePaths = articleMetadata.map(({ id }) => ({
    params: { id },
  }))
  const supplementPaths = supplementMetadata.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths: [...articlePaths, ...supplementPaths],
    fallback: false,
  }
}
export default Page
