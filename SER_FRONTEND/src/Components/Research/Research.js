import React, { useState, useEffect } from "react";
import sanityClient from "../../SanityClient/client.js";
import "./Research.css";
// import PortableText from "react-portable-text";
import PortableText from "@sanity/block-content-to-react";

export default function Project() {
  const [research, setResearch] = useState([]);
  const [categories, setCategories] = useState([]);
  const [id,setId] =useState(-1);
  const myPortableTextComponents = {
  
  };
  const [fetchall, setFetchAll] = useState(true);
  const serializers = {
    marks: {
      internalLink: ({ mark, children }) => {
        // const {slug = {}} = mark
        const href = `people`;
        return <a className="linktarget" href={href}>{children}</a>;
      },
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        const { href } = mark;
        return (
          <a href={href} className="linktarget" target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
    },
  };
  
  useEffect(() => {
    if (fetchall) {
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
    <div className="research">
     <p className="Rtitle"> Research </p>
      <div >
        <hr/>
        <p className="categorytitle">Categories :</p>

        {categories.length > 0 && (
          
          <div className="Categories">
            
            <div
            className={id === -1 ?"eachCategory2":"eachCategory"}
            onClick={() => {
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
                setId(-1);
            }}
          >
            All
          </div>
            {categories.map((data, i) => (
              <div key={i}>
               <div
                    className={id === i ?"eachCategory2":"eachCategory"}
                    onClick={() => {
                      console.log(data?.title);
                      console.log(data?.Research);
                      setResearch(data?.Research);
                      setFetchAll(false);
                      setId(i);
                    }}
                  >
                    {data?.title}
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
      <hr/> 
            {research.length > 0 && (
        <div className="research-data">
         
          {research.map((data, i) => (
            
          <ul key={i} className="listItems">  
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
    </div>

  );
}
