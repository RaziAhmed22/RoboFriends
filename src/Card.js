import React from 'react';

const Card=({id,name,email,speciality})=>{
		return(
			<div className='tc bg-light-green dib br3 shadow-5 pa3 ma2 grow'> 
				<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
				<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{speciality}</p>
				</div>
			</div>
		);
	}
export default Card;