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
          title:'Description',
          type: 'array', 
          of: [{type: 'block',
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
        name: 'SponsoringAgency',
        type: 'string',
        title: 'Sponsoring Agency',
        validation: Rule => Rule.required()
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
      {
        name: 'PI',
        type: "reference",
        to:[{type:'People'}],
        title: 'Principal Investigator',
        validation: Rule => Rule.required()
      },{
        name: 'CoPI',
        type: "reference",
        to:[{type:'People'}],
        title: 'Co Principal Investigator'
      },
    ]
  }