import sanityClient from '@sanity/client'

export default sanityClient({

    projectId:"dp24kyog",
    dataset:"production",
    apiVersion: '2021-03-25',
    useCdn:true,

})