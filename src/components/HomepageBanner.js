import * as React from 'react'
// import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



export const HomepageBanner = ({
  title,
  description,
  backgroundUrl,
  userPhoto
}) => { 
  const u_image = getImage(userPhoto)
  return (
  <section
    className="homepage-banner"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
    }}
  >
    <div className="banner-content container">
      <GatsbyImage
      image = {u_image}
      layout="fixed"
      width={200}
      height={200}
      alt=""
    />
  <p className="banner-description">{description}</p>
    </div>
  </section>
)}