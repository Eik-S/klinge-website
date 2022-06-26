# usage

## how to add blogposts

Blogposts are added to [blogposts.ts](./src/content/blogposts.ts) by such an object to the array of posts:

```javascript
{
  date: '2022-06-26' // format 'YYYY-MM-DD' 
  headlineText: '<your headline text>',
  headlineImage: { //optional
    src: '/images/<your image filename>', 
    alt: 'your image description for screen readers'
  },
  content: ContentElement[]
}
```

content must be a list of either `string` or `Image` e.g.:

```javascript
[{
  src: '/images/<your image filename>',
  alt: 'your image description for screen readers'
}]
```

would be a valid blog post content.
