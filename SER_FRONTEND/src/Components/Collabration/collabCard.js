import React from 'react'
import PortableText from '@sanity/block-content-to-react'

const CollabCard = (props) => {
   
    const serializers = {
    
        marks: {
            internalLink: ({mark, children}) => {
              const {slug = {}} = mark
              const href = `people/${slug.current}`
              return <a href={href}>{children}</a>
            },
            link: ({mark, children}) => {
              // Read https://css-tricks.com/use-target_blank/
              const { href } = mark
              return  <a href={href} target="_blank" rel="noreferrer">{children}</a>
            }
          }
        
      };
  return (
    <>
    <div className={"collab-container"}>
    
    <div className='card'>
        <div className='face face1'>
            <div className='content'>
                <img src={props.img} alt='alter'/>
            </div>
        </div>
        <div className='face face2'>
            <div className='content'>
                <PortableText blocks={props.desc} serializers={serializers}/>
            </div>
        </div>
        

    </div>
        
        {/* <img className='collablogo' src={props.img} alt="alter" /> */}
        
    </div>
    

     
    </>
  )
}

export default CollabCard