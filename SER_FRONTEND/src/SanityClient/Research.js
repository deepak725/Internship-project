import React, { useState, useEffect } from "react";
import sanityClient from "./client.js";
import "./Research.css";
// import PortableText from "react-portable-text";
import PortableText from '@sanity/block-content-to-react'

export default function Project() {
  const [research, setResearch] = useState([]);
  const [categories,setCategories] = useState([]);
  const myPortableTextComponents = {
    // internalLink: ({mark, children}) => {
    //     const {slug = {}} = mark
    //     const href = `/${slug.current}`
    //     return <a href={href}>{children}</a>}
    // marks: {
    //     internalLink: ({marks, children}) => {
    //       const {slug = {}} = marks
    //       const href = `/${slug.current}`
    //       return <a href={href}>{children}</a>
    //     }
    //   }
  };
  const [fetchall,setFetchAll] = useState(true);
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
//  function getSelectedData(data)
//  {
//     // console.log("hii");
//         // console.log(data?.title);
//  }
  useEffect(() => {

    if(fetchall)
    {
        
    sanityClient
      .fetch(
        ` *[_type == "research"]{
            ...,
            title[]{
              ...,
              markDefs[]{
                ...,
                _type == "internalLink" => {
                  "slug": @.reference->slug
                }
              }
            }
          }`

           
      )
      .then((data) => {
        setResearch(data);
        //  console.log(data);
      })
      .catch(console.err);

    }

      sanityClient
      .fetch(
        `*[_type == "research-category"]{
            title,
            "Research":  
            *[_type == "research" && references(^._id)]{
                ...,
                title[]{
                  ...,
                  markDefs[]{
                    ...,
                    _type == "internalLink" => {
                      "slug": @.reference->slug
                    }
                  }
                }
              }

        }`


      )
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch(console.err);

  }, [fetchall]);

  return (
    <div>

    <div>
        Categories
        <ul>
            <li className="eachCategory" onClick={()=>{

                        sanityClient
                        .fetch(
                        `*[_type == "research"]{
                                    title,
                            }`
                        )
                        .then((data) => {
                        setResearch(data);
                        //  console.log(data);
                        })
                        .catch(console.err);

                        

            }} >All</li>
        </ul>
        {categories.length > 0 && ( <div>
          {categories.map((data, i) => (
            
            <div key={i}>
              
              <ul>
                <li className="eachCategory" onClick={()=>{
                        console.log(data?.title);
                        console.log(data?.Research);
                        setResearch(data?.Research);
                        setFetchAll(false);
                }}> 
                    {data?.title}
                </li>
              </ul>
              </div>
          ))}
        </div>)} 
    </div>

      {research.length > 0 && (
        <div>
          {research.map((data, i) => (
            <ul key={i}>
              <li>
                <PortableText
                  blocks={data?.title}
                  projectId={"dp24kyog"}
                  dataset={"production"}
                  serializers={serializers}
                  components={myPortableTextComponents}
                />
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
