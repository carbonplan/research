import { publications, comments, tools } from '../contents/index'
import { articleMetadata, commentaryMetadata, supplementMetadata } from './mdx'

export const getCombinedContents = () => {
  return {
    articles: articleMetadata,
    commentary: commentaryMetadata,
    extras: supplementMetadata,
    publications,
    comments,
    tools,
  }
}
