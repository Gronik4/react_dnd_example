import React from 'react'

export default function Hall({ children, name, id }) {
  //console.log(children);
  return (
    <div className='conf-step__seances-hall' key={id} id={id}>
      <h3 className='conf-step__seances-title'>{name}</h3>
      <div className='conf-step__seances-timeline'>
        {children}
      </div>
    </div>
  )
}

