import React from 'react'

const PeopleCard = (props) => {
   
  return (
    <div className="card-container">
    	<h3 className='name'>{props.name}</h3>
	<img className="round" src={props.img} alt="user" />

	<p className='text'> {props.about} </p>
	<p className='text'>Qualification : {props.Qualification}</p>
    
    
    </div>
  )
}

export default PeopleCard