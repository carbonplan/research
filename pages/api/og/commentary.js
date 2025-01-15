import { ImageResponse } from 'next/og'
import { getCommentaryCard } from '@carbonplan/layouts'
import { commentaryMetadata } from '../../../utils/metadata'

export const runtime = 'edge'

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const collapseCardAuthorsParam =
      searchParams.get('collapseCardAuthors') === 'true'
    const titleWidthOverrideParam = searchParams.get('titleWidthOverride')

    if (!id) {
      throw new Error('Missing id parameter')
    }

    const commentary = commentaryMetadata.find((post) => post.id === id)
    if (!commentary) {
      throw new Error(`Commentary not found for id: ${id}`)
    }

    const { title, date, collapseCardAuthors, titleWidthOverride } = commentary
    const authors = commentary.authors.map((author) =>
      typeof author === 'string' ? author : author?.name || ''
    )

    const { component, fonts, options } = await getCommentaryCard({
      title,
      date,
      authors,
      collapseCardAuthors: collapseCardAuthorsParam || collapseCardAuthors,
      titleWidthOverride: titleWidthOverrideParam || titleWidthOverride,
    })

    return new ImageResponse(component, {
      ...options,
      fonts,
    })
  } catch (error) {
    console.log(`${error.message}`)
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
