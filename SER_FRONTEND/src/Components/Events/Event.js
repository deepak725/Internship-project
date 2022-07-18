import React, { useEffect, useState } from 'react'
import sanityClient from "../../SanityClient/client.js";
// import "./Research.css";
// import PortableText from "react-portable-text";
import PortableText from '@sanity/block-content-to-react'
const Event = () => {
  
  const [eventData,setEventData] = useState([]);
    useEffect(() => {
    
        sanityClient.fetch(
            `*[_type == "eventActivities"]{
                ...,
                Event_Description[]{
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
            setEventData(data);
            console.log(data);
          })
          .catch(console.err);
      }, []);
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
            return <a href={href}>{children}</a>
          }
        }
      }
  return (
    <div>
 <div className="cover">
       <p className="Rtitle"> Events </p>
       <hr/>
    {eventData.length > 0 && (
        <div className='research-data'>
          {eventData.map((data, i) => (
            <ul key={i}>
              <li>
                <PortableText
                  blocks={data?.Event_Description}
                  projectId={"dp24kyog"}
                  dataset={"production"}
                  serializers={serializers}
                //   components={myPortableTextComponents}
                />
              </li>
            </ul>
          ))}
        </div>
      )}
        </div>
    </div>
  )
}

export default Event