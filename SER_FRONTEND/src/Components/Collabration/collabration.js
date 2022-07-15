import React, { useState, useEffect } from "react";
import sanityClient from '../../SanityClient/client.js';
import imageUrlBuilder from '@sanity/image-url'
import './collabration.css';
import CollabCard from "./collabCard.js";
// import CollabToast from "./CollabToast.js";
// import PortableText from '@sanity/block-content-to-react'

export default function Collabration() {
    
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
            <div className="collabration">
              

                {collabData.length>0 && (
                    <div className="flex">
                    {
                       collabData.map((data, i) => (

                        <div key={i} >
                              {/* <i>{data?.name}</i>   */}
                            <CollabCard img={urlFor(data?.imageUrl).width(200).url()} name={data?.name} desc = {data?.collab_description}  />
                              {/* <img src={} alt="Gallery-images"/> */}


                        </div>
                   
                        
                        ))
                    }     
                   
                    </div> ) }

            </div>
        );

}
