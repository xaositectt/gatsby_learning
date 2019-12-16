import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const imageList = ({images}) => {
  return (
    <div style={{ display: 'flex'}}>
      {images.map((image, i) => {
        return <Img key={i} fluid={{...image, aspectRatio: 21 / 10}} style={{ width: 250, marginRight: 10, marginBottom: 10 }}/>
      })}
    </div>
  )
}

imageList.propTypes = {
  images: PropTypes.array
}

export default imageList
