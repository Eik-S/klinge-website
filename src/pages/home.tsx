import React from 'react'
import { BlogPost } from '../components/post'
import { blogposts } from '../content/blogposts'

export function Home() {
  return (
    <React.Fragment>
      {blogposts.map((blogpost, index) => (
        <BlogPost
          content={blogpost.content}
          headlineText={blogpost.headlineText}
          headlineImage={blogpost.headlineImage}
          direction={index % 2 === 0 ? 'left' : 'right'}
          key={index}
          date={blogpost.date}
        />
      ))}
    </React.Fragment>
  )
}
