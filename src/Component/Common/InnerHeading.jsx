import React from 'react'

const InnerHeading = (props) => {
  return (
       <>
        <div className='innerHeading'>
            <h4>{props.heading}</h4>
            <p>{props.title}</p>
        </div>
       </>
  
  ) 
}

export default InnerHeading;