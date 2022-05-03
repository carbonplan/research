import { publications, comments, tools } from '../contents/index'
import { articleMetadata, supplementMetadata } from './mdx'

export const getCombinedContents = () => {
  return {
    articles: articleMetadata,
    extras: supplementMetadata,
    publications,
    comments,
    tools,
  }
}
