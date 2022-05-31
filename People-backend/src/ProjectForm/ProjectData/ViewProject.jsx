import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'
import dsa from '../../Pictures/dsa.jfif'
import moment from 'moment'
const ViewProject = ({projects}) => {
 
    return projects.map(project=>(
        
      <tr key={project._id}>
          <td>{project.title}</td>
          <td style={{"textAlign":"justify","whiteSpace":"pre-wrap","wordWrap":"break-word"}}>{project.description}</td>
          <td>{ moment(project.proStartingDate).format("MMMM Do, YYYY")}</td>
          <td>{ moment(project.proEndingDate).format("MMMM Do, YYYY")}</td>
          <td><img src={project.image} alt='hello' style={{"width":"50%"}} /></td>
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