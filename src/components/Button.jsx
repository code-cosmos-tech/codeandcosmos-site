import React from 'react'

const Button = ({link, text, iclass}) => {
  return (
    <a href={link} target="_blank"><button className="btn"><i class={iclass}></i>{text}</button></a>
  )
}

export default Button