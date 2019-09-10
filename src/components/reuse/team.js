import React from 'react'

export default function team() {
  return (
    <div className="container">
        <div className="card-group">
      <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Portfolio</h5>
          <p className="card-text">This project is made using <strong>HTML5 , CSS , Bootstrap</strong></p>
          <p className="card-text"><small className="text-muted">Last updated 1 year ago</small></p>
          <a href="https://nis130.github.io/nishit/" className="btn btn-danger">visit</a>

        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Ecommerce</h5>
          <p className="card-text">This Project is made using <strong>ReactJS , Gatsby, Graphql, Contentful </strong></p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <a href="https://nis130.github.io/webTemplates/" className="btn btn-danger">visit</a>

        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Blogging</h5>
          <p className="card-text">This is made using ReactJS Library</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <a href="https://nis130.github.io/nishit/" className="btn btn-danger">visit</a>

        </div>
      </div>
    </div>
  </div>
    )
}
