export default {
    name: 'People',
    type: 'document',
      title: 'People',
    fields: [
      {
        name: 'Name',
        type: 'string',
        title: 'Full name',
        validation: Rule => Rule.required()
      },{
        name: 'Qualification',
        type: 'string',
        title: 'Qualification ',
      //  validation: Rule => Rule.required()
      },{
        name: 'About',
        type: 'string',
        title: 'About'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: Rule => Rule.required(),
        options: {
          source: 'Name',
          maxLength: 96,
        },
      },
      {
        title:'Want to display him/her on team page ?',
        type:'boolean',
        name:'display',
        validation: Rule => Rule.required()
      }
      ,
      {
        title: 'Profile Photo',
        name: 'Profilephoto',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
       
       
        // fields: [
        //   {
        //     name: 'caption',
        //     type: 'string',
        //     title: 'Caption',
        //     options: {
        //       isHighlighted: true // <-- make this field easily accessible
        //     }
        //   },
        //   {
        //     // Editing this field will be hidden behind an "Edit"-button
        //     name: 'attribution',
        //     type: 'string',
        //     title: 'Attribution',
        //   }
        // ]
      }

    ],
}