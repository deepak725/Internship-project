export default {
    name: 'research',
    type: 'document',
      title: 'Research',
    fields: [
        {
            name:'title',
            title:'Details of research',
            type: 'array', 
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
                              }
                             
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
              ],
              validation: Rule=> Rule.required()
            },
            {
               title:'Research-category',
               name:'ResearchCategory', 
                type: 'array',
                of: [{type: 'reference', to: {type: 'research-category'}}],
                validation: Rule=> Rule.required()     
            }
    ]
  }