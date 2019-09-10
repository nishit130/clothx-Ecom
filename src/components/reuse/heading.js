import React from 'react'

export default function heading({heading}) {
    return (
        <div className="row">
            <div className="col text-center mb-4 heading">
                <h1 className="display-5">{heading} </h1>
            </div>
        </div>
    )
}
