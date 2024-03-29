import React, { useState, useEffect } from "react";
import sanityClient from "../../SanityClient/client.js";
import imageUrlBuilder from "@sanity/image-url";
import "./Gallery.css";

export default function Gallary() {
  const builder = imageUrlBuilder(sanityClient);
  
  function urlFor(source) {
    return builder.image(source);
  }

  const [galleryData, setGalleryData] = useState([]);
 
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'gallery']{
                imagetitle,
                "imageUrl": Profilephoto.asset->url,
                slug
              }`
      )
      .then((data) => {
        console.log(data);
        setGalleryData(data);
      });
  }, []);

  return (
    <div className="gallery">
       <div className="cover">
       <p className='Rtitle'>Gallery</p>
        <hr/>
      {galleryData.length > 0 && (
       <div className="img-grid">
          {galleryData.map((data, i) => (
              
              <div key={i} className="img-container"> 
              
              <img className="img-single" src={urlFor(data?.imageUrl).url()}  alt="Gallery-images"/>
              <p className="imageTitle">{data?.imagetitle}</p>
              </div>
           
          ))}
         
        </div>
      )}
      
      </div>
      </div>
   
  );
}
