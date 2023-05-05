import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import slug from 'rehype-slug'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Box } from 'theme-ui'
import {
  Article,
  Cite,
  Commentary,
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
  commentaryMetadata,
  supplementMetadata,
} from '../../utils/mdx'
import { displayTitles, pageComponents } from '../../components/mdx'

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

const Page = ({ id, type, source, frontMatter, references }) => {
  const components = useThemedStylesWithMdx(useMDXComponents())
  const router = useRouter()

  useEffect(() => {
    if (window.location.hash) {
      router.push({ hash: window.location.hash })
    }
  }, [])

  switch (type) {
    case 'article':
      return (
        <Article
          meta={frontMatter}
          references={references}
          displayTitle={displayTitles[id]}
        >
          <MDXRemote
            {...source}
            components={{
              ...components,
              ...ARTICLE_COMPONENTS,
              PullQuote: (props) => (
                <PullQuote color={frontMatter.color} {...props} />
              ),
              ...pageComponents[id],
            }}
          />
        </Article>
      )
    case 'commentary':
      return (
        <Commentary
          meta={frontMatter}
          references={references}
          displayTitle={displayTitles[id]}
        >
          <MDXRemote
            {...source}
            components={{
              ...components,
              ...ARTICLE_COMPONENTS,
              ...pageComponents[id],
            }}
          />
        </Commentary>
      )
    case 'supplement':
      return (
        <Supplement meta={frontMatter} back={frontMatter.back}>
          <MDXRemote
            {...source}
            components={{
              ...components,
              ...SUPPLEMENT_COMPONENTS,
              ...pageComponents[id],
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
    metadata = commentaryMetadata.find((d) => d.id === params.id)
    if (metadata) {
      type = 'commentary'
    } else {
      metadata = supplementMetadata.find((d) => d.id === params.id)
      type = 'supplement'
    }
  }

  if (!metadata) {
    throw new Error(`No metadata found for id: ${params.id}`)
  }

  const source = fs.readFileSync(metadata.path)

  const { content, data } = matter(source)

  // Omit components paths from metadata passed to page
  const { components, ...rest } = data

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [slug],
    },
    scope: rest,
  })

  return {
    props: {
      id: params.id,
      type,
      source: mdxSource,
      frontMatter: {
        ...rest,
        path: `/research/${params.id}`,
        number: metadata.number ?? 0,
      },
      references: metadata.references ?? {},
    },
  }
}

export const getStaticPaths = async () => {
  const articlePaths = articleMetadata.map(({ id }) => ({
    params: { id },
  }))
  const commentaryPaths = commentaryMetadata.map(({ id }) => ({
    params: { id },
  }))
  const supplementPaths = supplementMetadata.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths: [...articlePaths, ...commentaryPaths, ...supplementPaths],
    fallback: false,
  }
}
export default Page
