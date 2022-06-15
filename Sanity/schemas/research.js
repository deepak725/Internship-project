export default {
    name : 'research',
    type: 'document',
    title : 'Research',
    fields : [
        {
            title: 'Research Title',
            name:'researchtitle',
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: 'Author Name',
            name: 'authorname',
            type: "reference",
            to:[{type:'People'}],
            validation: Rule => Rule.required()
        },
        {
            title: 'Publisher',
            name: 'publisher',
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: 'Venue',
            name: 'venue',
            type: "string",
            description: 'The event on which the research was presented',
            validation: Rule => Rule.required()
        },
        {
            title: 'Year',
            name: 'publishngyear',
            type: "date",
            description: 'Year of research publishment',
            validation: Rule => Rule.required(),
            options : {
                dateFormat : 'yyyy',
            }
        },
        {
            title:'Brief overview of Research paper',
            name:'briefdescription',
            type: 'array', 
            of: [{type: 'block'}],
            validation:Rule=>Rule.required(),
        },
        {
            title:'Total pages',
            name:'totalpages',
            type:"number",
            validation: Rule => Rule.required(),
            
        }
        ,
        {
            title: 'Research Page link',
            name: 'publishingpage',
            type: "url",
            description: 'The page where the research was published',
            validation: Rule => Rule.required()
        }
    ]
}