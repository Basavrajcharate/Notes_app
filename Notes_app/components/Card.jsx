import React from 'react'
import { TiDelete } from "react-icons/ti";

const Card = ({ title, desc, deleteNote }) => {
  return (
    <div className="card">
        <div className="del" onClick={deleteNote}>
            <TiDelete />
        </div>
        <div className="title">Title:- {title}</div>
        <div className="desc">Description:- {desc}</div>
    </div>
  )
}

export default Card