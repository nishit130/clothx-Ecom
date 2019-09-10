import React, { Component } from 'react'

export default class cart extends Component {
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
                
            </div>
        )
    }
}
