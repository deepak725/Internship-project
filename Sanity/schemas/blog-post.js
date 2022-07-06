export default {
    name: 'post',
    title: 'Blog-Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule=> Rule.required()
      },
      {
        name: 'author',
        title: 'blog-author',
        type: 'reference',
        to: {type: 'blog-author'},
        validation: Rule=> Rule.required()
      },
      {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
              source: 'title',
              maxLength: 96,
            },
      },
      {
        name: 'mainImage',
        title: 'Blog image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule=> Rule.required() 
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'blog-category'}}],
        validation: Rule=> Rule.required()
    },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: Rule=> Rule.required()
    },
      {
        name: 'body',
        title: 'Body',
        type: 'array', 
        of: [{type: 'block'}],
        validation: Rule=> Rule.required()
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  