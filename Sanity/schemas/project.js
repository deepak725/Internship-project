export default {
    name: 'Project',
    type: 'document',
      title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Project Title',
        validation: Rule => Rule.required()
      },
      {
        name:'description',
        title:'Project Details',
        type: 'array', 
        of: [{type: 'block',
        marks: {
          annotations: [
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
            },
              {
                  name: 'link',
                  type: 'object',
                  title: 'External link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL'
                    }
                   
                  ]
                }]}}],
        validation: Rule=> Rule.required()
    },
      
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: Rule=> Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
    {
        title: 'Project Start date',
        name: 'startDate',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        title: 'Project End date',
        name:  'endDate',
        type:  'datetime',
        validation: Rule => Rule.required().min(Rule.valueOfField('startDate'))
      },
     
    ]
  }