export default {
    name: 'collabrations',
    title: 'Collabrations',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Collabrating organization or company name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          validation: Rule => Rule.required(),
          options: {
            source: 'name',
            maxLength: 96,
          },
    },
        {
            name: 'collab_image',
            title: 'Collabrating organization or company logo',
            type: 'image',
            options: {
              hotspot: true,
            },
            validation: Rule=> Rule.required() 
        },
        {
            name:'collab_description',
            title:'Description',
            description:'Any information or experience you want to share related to project or event you have been part with this company or organization',
            type: 'array',
            of: [
              {
                title: 'Block',
                type: 'block',
                styles: [{title: 'Normal', value: 'normal'}],
                lists: [],
              },
            ]   
        }
    ],

}