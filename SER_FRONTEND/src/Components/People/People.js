import React, { useEffect, useState } from 'react'
import sanityClient from "../../SanityClient/client.js";
import defaults from "./defaults.png";
import imageUrlBuilder from '@sanity/image-url'
import './people.css';
import PeopleCard from './PeopleCard.js';

const People = () => {

    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
    return builder.image(source)
    }
    const [peopleData,setPeopleData] = useState([]);
    useEffect(()=>{

        sanityClient.fetch(`*[_type == 'People'] | order(_createdAt asc){
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
    <div className='people'>
      <p className='Rtitle'>Lab Members</p>
      <hr/>
      <div>
         {peopleData.length > 0 && (
        <div className='flex'>
          {peopleData.map((data, i) => (
           
          <div key={i} >
           <PeopleCard  name={data?.Name} id={i} about={data?.About} Qualification={data?.Qualification} img={data?.imageUrl == null ? defaults: urlFor(data?.imageUrl).url()}/>
              </div>   
          ))} 


         </div>)}
    </div>
    </div>
  )
}

export default People