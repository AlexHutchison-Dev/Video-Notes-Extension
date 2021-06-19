import React from 'react'

function Note(props) {
  
  console.log('Note created');
  return (
    <div>
      <p>{props.note}</p>    
    </div>
  )
}

export default Note
