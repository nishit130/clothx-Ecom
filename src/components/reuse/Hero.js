import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({src , title , subtitle, heroclass, btntext }) {
    return (
        <BackgroundImage
        className = {heroclass}
        fluid = {src}
        ><div>
            <h1 className="text-white">{title}</h1>
            <p class="text-warning display-4">{subtitle}</p>
            <button className="btn theme-bg text-white">{btntext}</button>
        </div>
        </BackgroundImage>
                
    )
}
