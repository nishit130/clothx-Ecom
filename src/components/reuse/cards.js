import React, { Component } from 'react'
import Img from 'gatsby-image'
import Heading from '../reuse/heading'

export default class cards extends Component {
    constructor(props)
{
    super(props);
    this.state = {
        products: props.products.edges,
    }
}
    render() {        
        return (
            <div>
                <Heading heading="Clothes"/>
                {
                    this.state.products.map(({node}) =>{
                     return(
                         <div className="container" key={node.id}>
                            <div className="row">
                            <div className="col-auto">
                            <Img fixed={node.image.fixed}/>
                            <div className="row">
                                <div className="col-auto">
                                    <h5>{node.title}</h5>
                                </div>
                                <div className="col-auto mb-3">
                                   ${node.price}
                                   <button
                                        className="snipcart-add-item ml-4 btn btn-success"
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url="https://www.google.com"
                                        
                                        >Add to cart</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-auto">
                                    <Img fixed={node.image.fixed}/>
                                    <div className="row">
                                        <div className="col-auto">
                                            <h5>{node.title}</h5>
                                        </div>
                                        <div className="col-auto mb-3">
                                        ${node.price}
                                        <button
                                        className="snipcart-add-item ml-4 btn btn-success"
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url="https://www.google.com"
                                        
                                        >Add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            </div>
                         </div>
                     )
                    })
                }
            </div>
        )
    }
}
