import React from 'react'

export default function ButtonComponent ({link,title,onClick}) {
  return (
    <button onClick={onClick}>
       <img title={title}
        className="btnImg"
        src={link}/>
    </button>
  )
}
