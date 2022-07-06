// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from './project'
import people from './people'
import research from './research'
import blogPost from './blog-post'
import blogAuthor from './blog-author'
import blogCategory from './blog-category'
import eventActivities from './event-activities'
import collabrations from './collabrations'
import gallery from './gallery'
import ResearchCategory from './Research-category'
// import eventActivities from './event-activities'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    project,
    people,
    research,
    ResearchCategory,
    blogPost,
    blogAuthor,
    blogCategory,
    eventActivities,
    collabrations,
    gallery
  
  ]),
})
