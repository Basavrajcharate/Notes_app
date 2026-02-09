import React from 'react'

const Card = ({ title, desc }) => {
  return (
    <div className="card">
     Title is {title} and description is {desc}
    </div>
  )
}

export default Card