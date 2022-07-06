import React, { useState, useEffect } from "react";
import sanityClient from '../../SanityClient/client.js';
import imageUrlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'

export default function Collabration() {
    const serializers = {
    
        marks: {
            // internalLink: ({mark, children}) => {
            //   const {slug = {}} = mark
            //   const href = `people/${slug.current}`
            //   return <a href={href}>{children}</a>
            // },
            link: ({mark, children}) => {
              // Read https://css-tricks.com/use-target_blank/
              const { href } = mark
              return  <a href={href} target="_blank" rel="noreferrer">{children}</a>
            }
          }
        
      };
        const [collabData,setcollabData] = useState([]);
        useEffect(()=>{
            sanityClient.fetch(`*[_type == 'collabrations']{
                name,
                "imageUrl": collab_image.asset->url,
                slug,
                collab_description
              }`).then((data)=>{
                    console.log(data);
                    setcollabData(data);
              })

        },[]);

        const builder = imageUrlBuilder(sanityClient)

        function urlFor(source) {
        return builder.image(source)
        }

        return(
            <div>
                collabration

                {collabData.length>0 && (
                    <div>
                    {
                       collabData.map((data, i) => (

                        <div key={i}>
                              <i>{data?.name}</i>  
                              <img src={urlFor(data?.imageUrl).width(200).url()} alt="Gallery-images"/>
                              <PortableText blocks= {data?.collab_description} serializers={serializers} />


                        </div>
                        
                        ))
                    }     
                   
                    </div> ) }

            </div>
        );

}
