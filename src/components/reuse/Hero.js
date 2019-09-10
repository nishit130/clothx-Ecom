import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({src , title , subtitle, heroclass}) {
    return (
        <BackgroundImage
        className = {heroclass}
        fluid = {src}
        ><div>
            <h1 class="text-white">{title}</h1>
            <p class="text-warning display-4">{subtitle}</p>
        </div>
        </BackgroundImage>
                
    )
}
