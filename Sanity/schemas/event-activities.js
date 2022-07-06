export default {
    name: 'eventActivities',
    title: 'Event & Activities',
    type: 'document',
    fields: [
      {
        name: 'Event_title',
        title: 'Event Title',
        type: 'string',
        validation: Rule => Rule.required()

    },
      {
      // portableText.js
      name: 'Event_Description',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                 
                ]
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'People' },
                      // other types you may want to link to
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }    
    ,
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'Event_title',
        maxLength: 96,
      },
    },
      {
          name:'Event_Link',
          title:'Event_Link',
          type:'url',
          description: 'The link for more information on this event.',
      }
    ],
  }
  