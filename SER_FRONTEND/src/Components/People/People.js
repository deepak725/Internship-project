import React, { useEffect, useState } from 'react'
import sanityClient from "../../SanityClient/client.js";
import defaults from "./defaults.png";
import imageUrlBuilder from '@sanity/image-url'
const People = () => {

    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
    return builder.image(source)
    }
    const [peopleData,setPeopleData] = useState([]);
    useEffect(()=>{

        sanityClient.fetch(`*[_type == 'People']{
            Name,
            "imageUrl": Profilephoto.asset->url,
            slug,
            display,
            Qualification,
            About
          }`).then((data)=>{
                console.log(data);
                // setGalleryData(data);
                setPeopleData(data);
          })

    },[])
  return (
    <div>
         {peopleData.length > 0 && (
        <div>
          {peopleData.map((data, i) => (
            <ul key={i}>
              <li>
                    {data?.Name}
                    <br></br>
                    {data?.About}
                    <br></br>
                    {data?.Qualification}
                    <br></br>
                    {data?.display ? <p>true</p>:<p>false</p>}
                    <br></br>
                    {data?.slug.current}
                    {data?.imageUrl == null ? <img src={defaults} alt="Gallery-images"/>:<img src={urlFor(data?.imageUrl).url()} alt="Gallery-images"/> }
              </li>
            </ul>
          ))} 


         </div>)}
    </div>
  )
}

export default People