import blockContent from './blockContent'

import pageInfo from './pageInfo'
import skill from './skill'
import experience from './experience'
import project from './project'
import social from './social'
import seo from './siteSettings/seo'
import colors from './siteSettings/colors'
import reCaptcha from './siteSettings/reCaptcha'
import gaTag from './siteSettings/gaTag'
import cookieConcent from './siteSettings/cookieConcent'

// Blog
import category from './blog/category'
// import categories from './blog/categories'
import author from './blog/author'
import post from './blog/post'
// import posts from './blog/posts'
import tags from './blog/tag'
// import blogSettings from './blog/blogSettings'

export const schemaTypes = [
  pageInfo,
  skill,
  experience,
  project,
  social,
  blockContent,
  seo,
  colors,
  reCaptcha,
  gaTag,
  cookieConcent,
  post,
  category,
  tags,
  author,
]
// blogSettings,
