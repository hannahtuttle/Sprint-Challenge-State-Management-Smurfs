import React from 'react'

const Smurf = props =>{

   const deleteSmurf = () => {
        //event.preventDefault()
        props.deleteButton(props.person.id)
   }
    
    return (
        <div>
            <h3>{props.person.name}</h3>
            <p>{props.person.age}</p>
            <p>{props.person.height}</p>
            <button>Edit</button>
            <button onClick={deleteSmurf}>Delete</button>
        </div>
    )
}

export default Smurf