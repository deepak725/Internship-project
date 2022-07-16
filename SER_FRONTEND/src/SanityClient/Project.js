import React,{useState , useEffect} from "react";
import sanityClient from './client.js';
import PortableText from "@sanity/block-content-to-react";

export default function Project(){
    
    const [research, setResearch] = useState([]);
   
    const myPortableTextComponents = {
    
    };
    // eslint-disable-next-line
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
            ` *[_type == "Project"]{
              ...,
              description[]{
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
             console.log(data);
          })
          .catch(console.err);
      }
  
     
    }, [fetchall]);
  
    return (

        //same css as research
      <div className="research">
       <p className="Rtitle"> Projects </p>
        <div >
          <hr/>
     
        {research.length > 0 && (
          <div className="research-data">
           
            {research.map((data, i) => (
              
            <ul key={i} className="listItems">  
            
             <li>
                 <PortableText
                    blocks={data?.description}
                    projectId={"dp24kyog"}
                    dataset={"production"}
                    serializers={serializers}
                    components={myPortableTextComponents}
                  />
                  [Status : {new Date(data?.endDate) > Date.now() ? "Ongoing" :"Completed"} ]
              </li>
              </ul>
            ))}
          </div>
        )}
        </div>
      </div>
  
        );

}