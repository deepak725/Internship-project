import React,{useState , useEffect} from "react";
import sanityClient from './client.js';
import PortableText from "react-portable-text"

export default function Project(){

        const myPortableTextComponents = {
                
              
                
              }
              const serializers = {
                


              }
        const [Project,setProject] = useState([]);
    
        useEffect(()=>{

            sanityClient.fetch(`*[_type == "Project"]{
                title,
                description,
                slug,


            }`).then((data)=> {setProject(data);console.log(data)}).catch(console.err)

        },[]);

        return (
                <div>
                    {Project.length > 0 && (
                <div>
                    {Project.map((data,i) => (
                    <div key={i}>
                    <div>Project detials of {data?.title} </div>
                    Description:
                    <PortableText content={data?.description}  serializers={serializers} components={myPortableTextComponents} />
                </div>
                    ))}
                </div>
                )}
                </div>
        )

}