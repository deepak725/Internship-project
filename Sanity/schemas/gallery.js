export default {
    name : 'gallery',
    type: 'document',
    title : 'Gallary',
    fields : [
        {
            title: 'Image',
            description:'Any event image or any pic of some acheivement you want to share',
            name: 'Profilephoto',
            type: 'image',
            validation:Rule=>Rule.required(),
            options: {
              hotspot: true // <-- Defaults to false
            }
        },
        {
            title:'Title for image',
            name:'imagetitle',
            type:'string',
            validation:Rule=>Rule.required(),

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule=> Rule.required(),
            options: {
              source: 'imagetitle',
              maxLength: 96,
            },
      },
    ]

}