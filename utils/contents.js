import { publications, comments, tools } from '../contents/index'
import { articleMetadata, supplementMetadata } from './mdx-utils'

export const getCombinedContents = () => {
  return {
    articles: articleMetadata,
    extras: supplementMetadata,
    publications,
    comments,
    tools,
  }
}
