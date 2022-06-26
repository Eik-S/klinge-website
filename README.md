# usage

## how to add blogposts

Blogposts are added to [blogposts.ts](./src/content/blogposts.ts) by such an object to the array of posts:

```javascript
{
  date: '2022-06-26', // format 'YYYY-MM-DD' 
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
},
{
  `Der Text kann auch etwas länger sein und
  
  Zeilenumbrüche werden auch korrekt dargestellt, wenn
  ein Formatierter Javascript String benutzt wird.`
}]
```

would be a valid blog post content.

## how to add calendar events

Calendar events are added to [events.ts](./src/content/events.ts) by such an object to the array of posts:

```javascript
{
  date: '2022-06-26', // format 'YYYY-MM-DD' 
  time: '18:30' // format 'hh:mm' 
  shortName: 'Konzi' // or 'Küfa', 'Demo' etc. to display in calendar tile
  name: '<your event name>',
  text: '<description of the event>' //optional
  image: { //optional
    src: '/images/<your image filename>', 
    alt: 'your image description for screen readers'
  },
  repeat: 'weekly' // optional for repeating events
  cancellations: ['2022-07-17'] //optional for cancelling single dates if event is repeating
}
```

would be a valid calendar event.
