import React from 'react'
import { ContentElement, Post } from '../components/post'
import { blogposts } from '../content/blogposts'

export function Home() {
  return (
    <React.Fragment>
      {blogposts.map((blogpost, index) => (
        <Post
          content={formatAsHtml(blogpost.content)}
          headlineText={blogpost.headlineText}
          headlineImage={blogpost.headlineImage}
          direction={index % 2 === 0 ? 'left' : 'right'}
          key={index}
        />
      ))}
    </React.Fragment>
  )
}

function formatAsHtml(content: ContentElement[]): ContentElement[] {
  return content.map((contentElement) => {
    if (typeof contentElement === 'string') {
      const htmlContent = contentElement.replaceAll('\n', '<br />')
      return htmlContent
    }
    return contentElement
  })
}
