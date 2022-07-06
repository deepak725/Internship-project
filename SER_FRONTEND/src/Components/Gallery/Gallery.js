import React, { useState, useEffect } from "react";
import sanityClient from '../../SanityClient/client.js';
import imageUrlBuilder from '@sanity/image-url'

export default function Gallary() {

        const [galleryData,setGalleryData] = useState([]);
        useEffect(()=>{
            sanityClient.fetch(`*[_type == 'gallery']{
                imagetitle,
                "imageUrl": Profilephoto.asset->url,
                slug
              }`).then((data)=>{
                    console.log(data);
                    setGalleryData(data);
              })

        },[]);

        const builder = imageUrlBuilder(sanityClient)

        function urlFor(source) {
        return builder.image(source)
        }

        return(
            <div>
                gallery

                {galleryData.length>0 && (
                    <div>
                    {
                       galleryData.map((data, i) => (

                        <div key={i}>
                              <i>{data?.imagetitle}</i>  
                              <img src={urlFor(data?.imageUrl).url()} alt="Gallery-images"/>
                        </div>
                        
                        ))
                    }     
                   
                    </div> ) }

            </div>
        );

}
