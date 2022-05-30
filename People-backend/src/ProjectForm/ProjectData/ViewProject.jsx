import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'

const ViewProject = ({projects}) => {
 
    return projects.map(project=>(
        
      <tr key={project._id}>
          <td>{project.title}</td>
          <td style={{"textAlign":"justify"}}>{project.description}</td>
          <td>{project.proStartingDate}</td>
          <td>{project.proEndingDate}</td>
          <td><a href=''>{project.image}</a> </td>
          <td className='edit-btn' style={{"fontSize":"1em"}} >
            <FaEdit></FaEdit>
          </td>
          <td className='delete-btn' style={{"fontSize":"1em"}} >
              <FaTrash />
          </td>           
      </tr>          
  ))
}

export default ViewProject