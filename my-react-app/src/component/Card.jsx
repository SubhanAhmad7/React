import React from 'react'

function Card(props) {
  return (
    <div className="card">
    <img src={props.product.image} className="card-img-top object-fit-cover" style={{ height: "280px" }} alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text">{props.product.description}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card